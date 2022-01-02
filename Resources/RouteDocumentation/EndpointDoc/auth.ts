export default [
  {
    api: "/login",
    description: "Login endpoint",
    request: {
      email: "required|string|email|max:255",
      password: "required|string|min:8",
    },
    response: {
      payload: {
        data: {
          id: "number",
          user: "string",
          email: "string",
          token: "string",
        },
        status: "true",
      },
    },
  },

  {
    api: "/register",
    description: "Registration endpoint",
    request: {
      email: "required|string|email|max:255",
      password: "required|string|min:8",
    },
    response: {
      payload: {
        data: {
          id: "number",
          user: "string",
          email: "string",
          token: "string",
        },
        status: "true",
      },
    },
  },
];
