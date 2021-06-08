import React, { useContext } from 'react';
import '../mainstyle.css';

import IconButton from '@material-ui/core/IconButton';
import ReportIcon from '@material-ui/icons/Report';
import ReplyRoundedIcon from '@material-ui/icons/ReplyRounded';
import Link from '@material-ui/core/Link';
import dayjs from 'dayjs'

import { AppContext,Post } from '../AppContext';
import Postform from './postform';
import Reportform from './reportform';

interface ThreadLabelProps{
  post:Post
}

export default function ThreadLabel({ post }:ThreadLabelProps) {
  const appCtx = useContext(AppContext);

  return (
    <>
      {post.title && <span className="text-danger">{post.title}</span>}
      <span className="text-primary">{post.name}</span>
      <span className="text-secondary">
        [{dayjs.unix(post.created).format('YYYY-MM-DD HH:mm:ss')} ID:{post.poster_id}]
      </span>
      <span className="text-info">
        {post.title ? (
          <Link
            onClick={() => {
              window.location.href = `/#/?id=${post.id}`;
              appCtx.getthread();
            }}
          >
            {`NO: ${post.id}`}
          </Link>
        ) : (
          `NO: ${post.id}`
        )}
      </span>
      <IconButton
        size="small"
        onClick={appCtx.toggle(true, <Reportform id={post.id} />)}
      >
        <ReportIcon />
      </IconButton>
      {post.title && (
        <IconButton
          aria-label="delete"
          size="small"
          onClick={appCtx.toggle(true, <Postform parent={post.id} />)}
        >
          <ReplyRoundedIcon />
        </IconButton>
      )}
    </>
  );
}
