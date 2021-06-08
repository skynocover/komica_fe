/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const posts = /* GraphQL */ `
  query Posts {
    posts {
      id
      title
      content
      image
      name
      sage
      created
      ip
      replyTime
      reply {
        name
        created
        content
        ip
        image
      }
    }
  }
`;
export const post = /* GraphQL */ `
  query Post($id: ID!) {
    post(id: $id) {
      id
      title
      content
      image
      name
      sage
      created
      ip
      replyTime
      reply {
        name
        created
        content
        ip
        image
      }
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      content
      image
      name
      sage
      created
      ip
      replyTime
      reply {
        name
        created
        content
        ip
        image
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: TablePostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
