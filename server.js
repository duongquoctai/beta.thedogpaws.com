const next    = require("next")
const path    = require("path")
const express = require("express")
const routes  = require("./routes")

const app     = next({
  dev: process.env.NODE_ENV !== "production"
})

const server  = express()
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const port  = process.env.PORT || 8080

  server.get("/robots.txt", (req, res) => (
    res.status(200).sendFile("robots.txt", {
      root: path.join(__dirname),
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      }
    })
  ))

  server.get("/*.xml", (req, res) => (
    res.status(200).sendFile(req.url, {
      root: path.join(__dirname + "/static/sitemap"),
      headers: {
        "Content-Type": "application/xml;charset=UTF-8"
      }
    })
  ))

  server.use(handler)
    .listen(port, error => {
      if (error) {
        throw error
      }

      console.log(`> Ready on port ${port}...`)
    })
})

