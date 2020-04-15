const express = require('express')
const nunjucks = require('nunjucks')

const pages = require('./data')

const server = express()

server.use(express.static("../public"))

server.set("view engine", "njk")

nunjucks.configure("../views", {
  express: server,
  noCache: true
})

server.get("/", (req, res) => {
  return res.render("courses", { items: pages })
})

server.get("/about", (req, res) => {
  const about = {
    avatar_url: "https://avatars0.githubusercontent.com/u/28929274?s=200&v=4",
    name: "Rocketseat",
    description: "Plataforma de educação em tecnologia 🚀",
    technologies: [
      { name: "Javascript" }, 
      { name: "React" }, 
      { name: "React-Native" }, 
      { name: "NodeJS" }, 
    ],
    links: [
      { name: "Github", url: "https://github.com/Rocketseat" },
      { name: "Intagram", url: "https://www.instagram.com/rocketseat_oficial/" },
      { name: "Facebook", url: "https://www.facebook.com/rocketseat/" },
    ]
  }

  return res.render("about", { about })
})

server.get("/courses/:id", (req, res) => {
  const id = req.params.id;

  const coursePage = pages.find(course => {
    return course.id == id
  })

  if (!coursePage) {
    return res.send("Page not found")
  }

  return res.render("course", { item: coursePage });
})

server.use((req, res) => {
  return res.status(404).render("not-found")
})

server.listen(5000, () => {
  console.log("Server is running")
})