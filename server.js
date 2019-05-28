const next    = require("next")
const express = require("express")
const routes  = require("./routes")

const app     = next({
  dev: process.env.NODE_ENV !== "production"
})

const server  = express()
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const port  = process.env.PORT || 8080

  server.use(handler)
    .listen(port, error => {
      if (error) {
        throw error
      }

      console.log(`> Ready on port ${port}...`)
    })
})
