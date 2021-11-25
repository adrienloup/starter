const express = require('express')
const app = express()
const router = express.Router()
const port = process.env.PORT || 8080

app.use('/', router)

app.get('/', (request, response) => {
  response.end('Hello World')
})

app.get('/hello' , (request, response) => {
  response.end('hello')
})

app.get('/world' , (request, response) => {
  response.end('world')
})

app.listen(port, 'localhost', _ => console.info('Project is running at \x1b[34mhttp://localhost:%s/\x1b[0m', port))
