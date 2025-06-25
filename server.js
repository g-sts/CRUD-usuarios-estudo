import express from 'express'

const app = express()
const port = 3000
const users = []

app.use(express.json())

app.post('/usuarios', (req, res) =>{

    users.push(req.body)

    res.status(201).json(req.body)

})

app.get('/usuarios', (req, res) =>{

    res.status(200).json(users)

})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))