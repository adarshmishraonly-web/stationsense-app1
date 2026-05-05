import server from "../../dist/server/index.js";

export async function handler(event, context) {
  try {
    // If server itself is a function
    if (typeof server === "function") {
      return await server(event, context);
    }

    // If server has default handler
    if (server && typeof server.default === "function") {
      return await server.default(event, context);
    }

    // If server has fetch
    if (server && typeof server.fetch === "function") {
      return await server.fetch(event);
    }

    return {
      statusCode: 500,
      body: "No valid handler found in server",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString(),
    };
  }
}