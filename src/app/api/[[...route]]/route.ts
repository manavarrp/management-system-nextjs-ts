import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  })
})
.get('/hello/:name', (c) => {
    const name = c.req.param('name')
  return c.json({
    message: `Hello ${name}!`,
    name: name
  })
})

export const GET = handle(app)
export const POST = handle(app)