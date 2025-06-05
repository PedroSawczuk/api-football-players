import fastify from "fastify";
import { env } from "./env";
import { addNewPlayer } from "./module/add-new-player";

const app = fastify()

app.register(addNewPlayer)

app.listen({ port: env.PORT}, () => {
    console.log(`🌐 API rodando em http://localhost:${env.PORT}`);
})