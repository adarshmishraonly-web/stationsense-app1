import server from "../../dist/server/index.js";

export async function handler(event, context) {
  if (server) {
    return server(event);
  }

  return {
    statusCode: 500,
    body: "Server function not working",
  };
}