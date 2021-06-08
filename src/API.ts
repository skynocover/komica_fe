/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Post = {
  __typename: "Post",
  id: string,
  title?: string | null,
  content?: string | null,
  image?: string | null,
  name?: string | null,
  sage?: boolean | null,
  created: number,
  ip?: string | null,
  replyTime: number,
  reply?:  Array<Reply | null > | null,
};

export type Reply = {
  __typename: "Reply",
  name?: string | null,
  created: number,
  content?: string | null,
  ip?: string | null,
  image?: string | null,
};

export type CreatePostInput = {
  title?: string | null,
  content?: string | null,
  image?: string | null,
  name?: string | null,
  sage?: boolean | null,
  created: number,
  ip?: string | null,
  replyTime: number,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  image?: string | null,
  name?: string | null,
  sage?: boolean | null,
  created?: number | null,
  ip?: string | null,
  replyTime?: number | null,
};

export type DeletePostInput = {
  id: string,
};

export type TablePostFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
  content?: TableStringFilterInput | null,
  image?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  sage?: TableBooleanFilterInput | null,
  created?: TableIntFilterInput | null,
  ip?: TableStringFilterInput | null,
  replyTime?: TableIntFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type PostConnection = {
  __typename: "PostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type PutPostMutationVariables = {
  title?: string | null,
  content?: string | null,
  image?: string | null,
  name?: string | null,
  sage?: boolean | null,
  created?: number | null,
  ip?: string | null,
  replyTime?: number | null,
};

export type PutPostMutation = {
  putPost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
    name?: string | null,
    sage?: boolean | null,
    created: number,
    ip?: string | null,
    replyTime: number,
    reply?:  Array< {
      __typename: "Reply",
      name?: string | null,
      created: number,
      content?: string | null,
      ip?: string | null,
      image?: string | null,
    } | null > | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
    name?: string | null,
    sage?: boolean | null,
    created: number,
    ip?: string | null,
    replyTime: number,
    reply?:  Array< {
      __typename: "Reply",
      name?: string | null,
      created: number,
      content?: string | null,
      ip?: string | null,
      image?: string | null,
    } | null > | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
    name?: string | null,
    sage?: boolean | null,
    created: number,
    ip?: string | null,
    replyTime: number,
    reply?:  Array< {
      __typename: "Reply",
      name?: string | null,
      created: number,
      content?: string | null,
      ip?: string | null,
      image?: string | null,
    } | null > | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
    name?: string | null,
    sage?: boolean | null,
    created: number,
    ip?: string | null,
    replyTime: number,
    reply?:  Array< {
      __typename: "Reply",
      name?: string | null,
      created: number,
      content?: string | null,
      ip?: string | null,
      image?: string | null,
    } | null > | null,
  } | null,
};

export type PostsQuery = {
  posts?:  Array< {
    __typename: "Post",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
    name?: string | null,
    sage?: boolean | null,
    created: number,
    ip?: string | null,
    replyTime: number,
    reply?:  Array< {
      __typename: "Reply",
      name?: string | null,
      created: number,
      content?: string | null,
      ip?: string | null,
      image?: string | null,
    } | null > | null,
  } | null > | null,
};

export type PostQueryVariables = {
  id: string,
};

export type PostQuery = {
  post?:  Array< {
    __typename: "Post",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
    name?: string | null,
    sage?: boolean | null,
    created: number,
    ip?: string | null,
    replyTime: number,
    reply?:  Array< {
      __typename: "Reply",
      name?: string | null,
      created: number,
      content?: string | null,
      ip?: string | null,
      image?: string | null,
    } | null > | null,
  } | null > | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title?: string | null,
    content?: string | null,
    image?: string | null,
    name?: string | null,
    sage?: boolean | null,
    created: number,
    ip?: string | null,
    replyTime: number,
    reply?:  Array< {
      __typename: "Reply",
      name?: string | null,
      created: number,
      content?: string | null,
      ip?: string | null,
      image?: string | null,
    } | null > | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: TablePostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "PostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      title?: string | null,
      content?: string | null,
      image?: string | null,
      name?: string | null,
      sage?: boolean | null,
      created: number,
      ip?: string | null,
      replyTime: number,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};
