const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static("../public"))

server.set("view engine", "njk")

nunjucks.configure("../views", {
  express: server
})

server.get("/", (request, response) => {
  response.render("courses")
})

server.get("/about", (request, response) => {
  response.render("about")
})

server.use((request, response) => {
  response.status(404).render("not-found")
})

server.listen(5000, () => {
  console.log("Server is running")
})