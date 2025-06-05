import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { knex } from '../database'

export async function playerModule(app: FastifyInstance) {
  app.get('/', async () => {
    const players = await knex('players').select('*')
    return {
      total: players.length,
      players,
    }
  })

  app.get('/:id', async (request, reply) => {
    const getPlayerParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getPlayerParamsSchema.parse(request.params)

    const player = await knex('players').where({ id }).first()

    if (!player) {
      return reply.status(404).send('Jogador não encontrado!')
    }

    return player
  })

  app.post('/', async (request, reply) => {
    const createPlayerBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      position: z.enum(['goalkeeper', 'defender', 'midfielder', 'forward']),
    })

    const { name, email, position } = createPlayerBodySchema.parse(request.body)

    await knex('players').insert({
      id: crypto.randomUUID(),
      name,
      email,
      position,
    })
    return reply.status(201).send(`Jogador ${name} adicionado com sucesso!`)
  })
}
