import express from 'express'

const app = express()
const port = 3000
const users = []

app.use(express.json())

app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
    
})

app.get('/usuarios', (req, res) =>{

    res.status(200).json(users)

})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))