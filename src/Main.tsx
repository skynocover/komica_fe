import React, { useEffect, useContext } from 'react';
// import logo from './logo.svg';
import './mainstyle.css';

import { Divider } from '@material-ui/core';
import { AppContext } from './AppContext';

import TopLink from './parts/topLink';
import Header from './parts/header';
import Poster from './parts/poster';
import Pagenation from './parts/pagination';
import ListThreads from './parts/listThreads';
import BottomLink from './parts/bottomLink';

const Main = () => {
  const appCtx = useContext(AppContext);
  useEffect(() => {
    appCtx.getthread();
  }, []); //[0]動作[1]會觸發動作的事件

  return (
    <>
      <TopLink />
      <Header />
      <Poster />
      <Pagenation />
      <Divider />
      <ListThreads />
      <Pagenation />
      <BottomLink />
    </>
  );
};

export default Main;
