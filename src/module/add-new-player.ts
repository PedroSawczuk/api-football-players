import { FastifyInstance } from "fastify";
import { z } from "zod";
import { knex } from "../database";

export async function addNewPlayer(app: FastifyInstance) {
  app.post("/players", async (request, reply) => {
    const createPlayerBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      position: z.enum(["goalkeeper", "defender", "midfielder", "forward"]),
    });

    const { name, email, position } = createPlayerBodySchema.parse(
      request.body
    );

    await knex("players").insert({
      id: crypto.randomUUID(),
      name,
      email,
      position,
    });
    return reply.status(201).send(`Jogador ${name} adicionado com sucesso!`);
  });
}
