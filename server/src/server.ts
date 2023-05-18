import { PrismaClient } from "@prisma/client";
import fastify from "fastify";

const app = fastify();
const prisma = new PrismaClient();

// HTTP: Método GET
app.get("/users", async () => {
  const users = await prisma.user.findMany();
  return users;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Servidor rodando em http://localhost:3333 🔥");
  });
