import express from 'express'

const app = express()
const port = 3000
const users = []

app.use(express.json())

app.post('/usuarios', (req, res) =>{

    users.push(req.body)

    res.send('Ok post')

})

app.get('/usuarios', (req, res) =>{

    res.json(users)

})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))