export default [
  {
    api: "/comment/save",
    description: "Save new comment",
    request: {
      post_id: "required|numeric",
      comment_author: "required|numeric",
      comment: "required|string|min:2",
    },
    response: {
      payload: {
        data: {
          id: "number",
          commented_by: {
            id: "number",
            username: "string",
          },
          comment_content: "string",
          created_at: "string",
        },
        status: "true",
      },
    },
  },
];
