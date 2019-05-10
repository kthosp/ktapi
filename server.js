const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.json({
    message: 'API OK'
  })
})

app.get('/status', (req, res) => {
  res.json({
    message: 'API status router'
  })
})

app.get('/error', (req, res) => {
  res.json({
    message: 'API Error'
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
}) 