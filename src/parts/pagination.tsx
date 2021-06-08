import React, { useContext } from 'react';
import '../mainstyle.css';

import Pagination from '@material-ui/lab/Pagination';
import { AppContext } from '../AppContext';

const Pages = () => {
  const appCtx = useContext(AppContext);

  const handlePage = async ( value:number) => {
    window.location.href = `/#/?page=${value}`;
    appCtx.getthread();
  };

  return (
    !appCtx.SingleThread ? (
      <div className="d-flex justify-content-center m-2">
        <Pagination
          count={appCtx.pageCount}
          shape="rounded"
          color="primary"
          page={appCtx.page}
          onChange={(event,value)=>handlePage(value)}
        />
      </div>
    )
    :<div/>
  );
};

export default Pages;
