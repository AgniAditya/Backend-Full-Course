import express from 'express'

const app = express()
const PORT = 3000

app.get('/',(_,res) => {
    res.json({message : 'Building Todos Database with mongoose'})
})

app.listen(PORT,console.log(`App listening on http://localhost:${PORT}`))