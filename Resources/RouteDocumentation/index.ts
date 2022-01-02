import auth from "./EndpointDoc/auth";
import post from "./EndpointDoc/post";
import comment from "./EndpointDoc/comment";

let healthCheck = [
  {
    api: "/",
    description: "ExpressWebJs Default Route",
    request: {},
    response: {
      payload: {
        data: `Welcome to ExpressWebJs. ${process.env.APP_NAME} is running well`,
      },
    },
  },
];

let endpointCollections = [auth, post, comment, healthCheck];

let format = [
  {
    api: "/",
    description: "",
    request: {},
    response: {
      payload: {},
    },
  },
];

let endpointDocumentation = format.concat(...endpointCollections);

export default endpointDocumentation;
