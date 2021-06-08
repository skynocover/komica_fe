import React, { useState } from 'react';
import './mainstyle.css';
import axios from 'axios';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import AWSAppSyncClient, { defaultDataIdFromObject } from 'aws-appsync';
import appSyncConfig from './aws-exports';
import Postform from './components/postform';
import { posts, post, getPost, listPosts } from './graphql/queries';
import { gql } from '@apollo/client';
import dayjs from 'dayjs';
import { TablePostFilterInput } from './API';

interface AppContextProps {
  SingleThread: boolean;
  pageCount: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;

  thread: Post[];
  getthread: () => Promise<void>;
  Report: (reason: string, content: string, reportid?: number) => void;
  PostThread: ({ title, image, content, name, withImage, sage, parent }: Post) => void;
  toggle: (open: boolean, form?: any) => (event: any) => void;
  setDrawOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // apolloClient: ApolloClient<NormalizedCacheObject>;
}

const AppContext = React.createContext<AppContextProps>(undefined!);

export const client = new AWSAppSyncClient({
  url: appSyncConfig.aws_appsync_graphqlEndpoint,
  region: appSyncConfig.aws_appsync_region,
  auth: {
    type: 'API_KEY',
    apiKey: appSyncConfig.aws_appsync_apiKey,
  },
});

interface AppProviderProps {
  children: React.ReactNode;
}

export interface Post {
  id: number;
  name?: string;
  title?: string;
  poster_id?: number;
  created: number;
  reply?: Reply[];
  content?: string;
  image?: string;
  withImage?: boolean;
  sage?: boolean;
  parent?: Post;
}

export interface Reply {
  id: number;
  name?: string;
  title?: string;
  poster_id?: number;
  created: number;
  reply?: Reply[];
  content?: string;
  image?: string;
  withImage?: boolean;
  sage?: boolean;
  parent?: Post;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [SingleThread, setSingleThread] = React.useState(false);

  // draw ...
  const [drawOpen, setDrawOpen] = React.useState<boolean>(false);
  const [Form, setForm] = React.useState(<Postform />);
  const toggle = (open: boolean, form?: any) => (event: any) => {
    try {
      console.log('type: ', event.type);
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      console.log('open: ', open);
      form && setForm(form);
      setDrawOpen(open);
    } catch (error) {
      console.log('cccccc');
      console.log(error.message);
    }
  };

  // success drawer
  const [success, setSuccess] = React.useState(false);
  const [successLabel, setSuccessLabel] = React.useState<string>('success');
  const [severity, setSeverity] = React.useState<any>('success');
  const SuccessClose = (_event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccess(false);
  };

  // api ...
  const Report = (reason: string, content: string, reportid?: number) => {};

  const PostThread = ({ title, image, content, name, withImage, sage, parent }: Post) => {};

  // get thread and page account ...
  const [thread, setThread] = useState<Post[]>([]);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);
  const getthread = async () => {
    try {
      let data = await client.query({
        // query: gql(listPosts),
        query: gql`
          query ListPosts($filter: TablePostFilterInput) {
            listPosts(filter: $filter) {
              items {
                id
                title
                content
                image
                name
                sage
                created
                ip
                replyTime
              }
            }
          }
        `,
        // metadata: { ScanIndexForward: false },
        // scanIndexForward: false,
        variables: {
          filter: {
            created: {
              le: dayjs().unix(),
            },
          },
        },
        fetchPolicy: 'network-only',
      });

      // let result = await appCtx.fetch('get', '/api/servers');
      if (data) {
        let result = JSON.parse(JSON.stringify(data));
        let items = result.data.listPosts.items;
        console.log('servers: ', JSON.stringify(items));

        setThread(items);
        //  setDataSource(result.data.listServers.items);
      }
    } catch (error) {
      console.log('list posts fail, error: ', error.message);
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  const classes = useStyles();

  return (
    <AppContext.Provider
      value={{
        thread,
        getthread,

        Report,
        PostThread,
        toggle,
        setDrawOpen,

        SingleThread,
        pageCount,
        page,
        setPage,
      }}
    >
      {children}

      <div className={classes.root}>
        <Snackbar open={success} autoHideDuration={1200} onClose={SuccessClose}>
          <MuiAlert elevation={6} variant="filled" onClose={() => SuccessClose} severity={severity}>
            {successLabel}
          </MuiAlert>
        </Snackbar>
      </div>

      <Drawer anchor="bottom" open={drawOpen} onClose={toggle(false)}>
        <div className="m-3">{Form}</div>
      </Drawer>
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
