import 'dotenv/config';
import { z } from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string(),
    MIGRATIONS_URL: z.string(),
    PORT: z.coerce.number().default(3333),
})

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
    console.error('❌ Erro ao ler as variáveis de ambiente:', _env.error.format());
    throw new Error('Variáveis de ambiente inválidas');
}

export const env = _env.data;