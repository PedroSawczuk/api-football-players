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

app.listen({ port: env.PORT }, () => {
  console.log(`🌐 API rodando em http://localhost:${env.PORT}`)
})
