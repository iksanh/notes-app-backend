const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["http://notesapp-v1.dicodingacademy.com"],
        credentials: true, // If needed
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server Running on ${server.info.uri}`);
};

init();
