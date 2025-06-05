import fastify from "fastify";
import { env } from "./env";
import { addNewPlayer } from "./module/add-new-player";

const app = fastify()

app.get("/", () => {
    return "Bem-vindo à API de Gerenciamento de Jogadores!";
})

app.register(addNewPlayer, {
    prefix: "players",
})

app.listen({ port: env.PORT}, () => {
    console.log(`🌐 API rodando em http://localhost:${env.PORT}`);
})