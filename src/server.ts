import fastify from 'fastify'
import { env } from './env'
import { playerModule } from './module/player-module'

const app = fastify()

app.get('/', () => {
  return 'Bem-vindo à API de Gerenciamento de Jogadores!'
})

app.register(playerModule, {
  prefix: 'players',
})

app.setNotFoundHandler((request, reply) => {
  reply.status(404).send(`A rota ${request.url} não foi encontrada.`)
})

app.listen({ port: env.PORT }, () => {
  console.log(`🌐 API rodando em http://localhost:${env.PORT}`)
})
