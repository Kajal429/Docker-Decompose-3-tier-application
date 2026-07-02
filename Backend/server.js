const express = require('express')
const app = express()
const PORT = 5000

app.get('/', (req, res) => {
  res.json({ 
    message: 'Backend is running!',
    status: 'healthy'
  })
})

app.get('/api/data', (req, res) => {
  res.json({ 
    data: 'Hello from Backend API!',
    project: 'Project 4 - Docker Compose'
  })
})

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`)
})