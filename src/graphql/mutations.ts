/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const putPost = /* GraphQL */ `
  mutation PutPost(
    $title: String
    $content: String
    $image: String
    $name: String
    $sage: Boolean
    $created: AWSTimestamp
    $ip: String
    $replyTime: AWSTimestamp
  ) {
    putPost(
      title: $title
      content: $content
      image: $image
      name: $name
      sage: $sage
      created: $created
      ip: $ip
      replyTime: $replyTime
    ) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost($input: DeletePostInput!) {
    deletePost(input: $input) {
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
