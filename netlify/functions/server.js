import server from "../../dist/server/index.js";

export async function handler(event, context) {
  try {
    if (server && server.fetch) {
      return await server.fetch(event);
    }

    return {
      statusCode: 500,
      body: "Server fetch not available",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString(),
    };
  }
}