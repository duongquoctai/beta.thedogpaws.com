const next    = require('next')
const express = require('express')
const proxy   = require('http-proxy-middleware')
const routes  = require('./routes')

const app     = next({
  dev: process.env.NODE_ENV !== 'production'
})

const server  = express()
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const port = process.env.PORT || 8080

  server.get('*', (req, res) => {
    return handler(req, res)
  })

  server.use(handler)
    .listen(port, error => {
      if (error) {
        throw error
      }

      console.log(`> Ready on port ${port}...`)
    })
})
