import React, { useContext } from 'react';
import '../mainstyle.css';
import { AppContext } from '../AppContext';
import Postform from '../components/postform';
import Typography from '@material-ui/core/Typography';

export default () => {
  const appCtx = useContext(AppContext);

  return (
    !appCtx.SingleThread ?(
      <>
        <Postform />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-sm-8 col-md-6 col-12 flex-column">
              <Typography variant="subtitle2" gutterBottom>
                標題及內文為必填,名稱提及圖檔為選填.
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                圖檔網址:並不會保存圖檔,因此請先圖片上傳後附上網址.
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                若不想推文請勾選Sage
              </Typography>
            </div>
          </div>
        </div>
      </>
    ):<div/>
  );
};
