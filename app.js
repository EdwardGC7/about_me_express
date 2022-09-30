const express = require('express');

const app = express()


// Ruta /me con GET
app.get('/me', (req, res) => {
  res.status(200).json({
    name: 'Osvaldo Gonzalez',
    age: '28',
    country: 'Dominican Republic'
  })
})

// Ruta /metas con POST
app.post('/metas', (req, res) => {
  res.status(200).json({
    hobbie1: 'Programming',
    hobbie2: 'Reading',
    hobbie3: 'Drawing'
  })
})

// Ruta /metas con PATCH
app.patch('/metas', (req, res) => {
  res.status(200).json({
    goal1: 'Acquire an expert level in React js',
    goal2: 'master development with flutter'
    
  })
})

// Ruta /business con PUT
app.put('/business', (req, res) => {
  res.status(200).json({
    business1: 'Amazon',
    business2: 'Toggl.com',
    business3: 'Google',
  })
})

app.listen(9000, () => {
  console.log('Sercer started at port 9000')
})