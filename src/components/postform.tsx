import React, { useContext } from 'react';
import '../mainstyle.css';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Checkbox from '@material-ui/core/Checkbox';
import NavigationIcon from '@material-ui/icons/Navigation';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { Formik, useField } from 'formik';
import { AppContext, client } from '../AppContext';
import { gql } from '@apollo/client';
import { putPost, createPost } from '../graphql/mutations';
import dayjs from 'dayjs';
const MuiCheckbox = ({ ...props }) => {
  const [field] = useField(props.name);
  return <Checkbox {...field} color={props.color} checked={field.value} />;
};

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

interface PostformProps {
  parent?: number;
}

const Postform = ({ parent }: PostformProps) => {
  const appCtx = useContext(AppContext);
  const classes = useStyles();
  var RegExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return (
    <Formik
      initialValues={{
        title: '',
        name: '',
        content: '',
        image: '',
        withImage: false,
        sage: false,
      }}
      validateOnChange={false}
      validate={(values) => {
        const errors: any = {};
        if (!parent && !values.title) {
          errors.title = '標題必填';
        } else if (!values.content) {
          errors.content = '內文必填';
        } else if (values.image && !values.withImage) {
          errors.image = '附圖請符合勾選規則';
        } else if (!values.image && values.withImage) {
          errors.image = '附圖請符合勾選規則';
        } else if (values.image && !RegExp.test(values.image)) {
          errors.image = '無效附圖網址';
        }
        return errors;
      }}
      onSubmit={async (values, action) => {
        // appCtx.Post(
        //   values.title,
        //   values.image,
        //   values.content,
        //   values.name,
        //   values.withImage,
        //   values.sage,
        //   parent,
        // );
        // appCtx.setDrawOpen(false);
        try {
          let data = await client.mutate({
            mutation: gql(createPost),
            variables: {
              input: {
                title: values.title,
                image: values.image,
                content: values.content,
                name: values.name,
                sage: values.sage,
                created: dayjs().unix(),
                replyTime: dayjs().unix(),
              },
            },
          });

          if (data) {
            appCtx.getthread();
          }

          appCtx.toggle(false, null);
          action.resetForm();
        } catch (error) {
          console.log('ddddd');
          console.log(error.message);
        }
      }}
    >
      {({ handleSubmit, values, errors, handleChange }) => (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-sm-8 col-md-6 col-12 d-flex flex-column bd-highlight ">
              {!parent && (
                <TextField
                  error={errors.title ? true : undefined}
                  helperText={errors.title}
                  name="title"
                  label="標題"
                  variant="filled"
                  value={values.title}
                  onChange={handleChange}
                />
              )}

              <TextField
                name="name"
                label="名稱"
                variant="filled"
                value={values.name}
                onChange={handleChange}
              />
              <TextField
                error={errors.content ? true : undefined}
                helperText={errors.content}
                name="content"
                onChange={handleChange}
                multiline
                rows={4}
                label="內文"
                variant="filled"
                value={values.content}
                placeholder="可使用markdown語法"
              />
              <TextField
                error={errors.image ? true : undefined}
                helperText={errors.image}
                name="image"
                label="附加圖檔網址"
                variant="filled"
                value={values.image}
                onChange={handleChange}
              />
              <div className="d-flex">
                <FormControlLabel
                  control={
                    <MuiCheckbox
                      checked={'withImage'}
                      onChange={handleChange}
                      name="withImage"
                      color="primary"
                    />
                  }
                  label="附圖"
                />
                {parent && (
                  <FormControlLabel
                    control={<MuiCheckbox checked={'sage'} onChange={handleChange} name="sage" />}
                    name="sage"
                    label="sage"
                  />
                )}
                <div className="flex-fill" />
                <Fab
                  variant="extended"
                  color="primary"
                  aria-label="add"
                  className={classes.margin}
                  size="small"
                  onClick={() => handleSubmit()}
                >
                  <NavigationIcon className={classes.extendedIcon} />
                  發文
                </Fab>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Postform;
