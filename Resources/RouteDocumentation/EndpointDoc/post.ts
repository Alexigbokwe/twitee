export default [
  {
    api: "/post/all",
    description: "Fetch all posts in the system",
    request: {},
    response: {
      payload: {
        data: [
          {
            id: "number",
            posted_by: {
              id: "number",
              username: "string",
            },
            post_content: "string",
            likes: [
              {
                id: "number",
                post_id: "number",
                liked_by: { id: "number", username: "string" },
              },
            ],
            like_count: "number",
            comment: [
              {
                id: "number",
                post_id: "number",
                commented_by: { id: "number", username: "string" },
                comment_content: "string",
                created_at: "number",
              },
            ],
            created_at: "string",
          },
        ],
        status: "true",
      },
    },
  },

  {
    api: "/post/get/:post_id",
    description: "Fetch a post by id",
    request: {
      post_id: "required|numeric",
    },
    response: {
      payload: {
        data: {
          id: "number",
          posted_by: {
            id: "number",
            username: "string",
          },
          post_content: "string",
          likes: [
            {
              id: "number",
              post_id: "number",
              liked_by: { id: "number", username: "string" },
            },
          ],
          like_count: "number",
          comment: [
            {
              id: "number",
              post_id: "number",
              commented_by: { id: "number", username: "string" },
              comment_content: "string",
              created_at: "number",
            },
          ],
          created_at: "string",
        },

        status: "true",
      },
    },
  },

  {
    api: "/post/save",
    description: "Save a new post",
    request: {
      post_author: "required|numeric",
      post: "required|string",
    },
    response: {
      payload: {
        data: {
          id: "number",
          posted_by: {
            id: "number",
            username: "string",
          },
          post_content: "string",
          likes: [
            {
              id: "number",
              post_id: "number",
              liked_by: { id: "number", username: "string" },
            },
          ],
          like_count: "number",
          comment: [
            {
              id: "number",
              post_id: "number",
              commented_by: { id: "number", username: "string" },
              comment_content: "string",
              created_at: "number",
            },
          ],
          created_at: "string",
        },

        status: "true",
      },
    },
  },

  {
    api: "/post/like",
    description: "Like a post endpoint. Author is the user liking the post",
    request: {
      post_id: "required|numeric",
      author: "required|numeric",
    },
    response: {
      payload: {
        data: {
          id: "number",
          liked_by: {
            id: "number",
            username: "string",
          },
          post_id: "number",
          created_at: "string",
        },

        status: "true",
      },
    },
  },

  {
    api: "/post/delete/:post_id",
    description: "Delete a post from the system. Note: this action can only be performed by the post creator",
    request: {
      post_id: "required|numeric",
    },
    response: {
      payload: {
        data: "string",
        status: "true",
      },
    },
  },
];
