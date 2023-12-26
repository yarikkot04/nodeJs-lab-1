import http from 'http'

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end(`<h1>Lab 1. Node JS</h1>`)
  }
})

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
