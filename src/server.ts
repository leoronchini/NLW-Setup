import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.get('/hello', () => {
    return 'Hello world';
})

app.listen({
    port: 3000
}).then(() => {
    console.log('HTTP Server running!')
})