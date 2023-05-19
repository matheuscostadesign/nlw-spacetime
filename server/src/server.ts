import cors from "@fastify/cors";
import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";

const app = fastify();

app.register(cors, {
  origin: true, // todas URls de front-end podem acessar o backedn
  //origin: "https://localhost:3000" // dominio do front-end, onde o backend podera ser consumido
});
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Servidor rodando em http://localhost:3333 🔥");
  });
