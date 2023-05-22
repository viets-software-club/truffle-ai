import app from './server'

void app.listen({ host: '0.0.0.0', port: process.env.SERVER_PORT || 3001 })
