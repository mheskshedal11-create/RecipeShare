import express from 'express'
import dotenv from 'dotenv'


dotenv.config()
const PORT = process.env.PORT || 5000

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'hello' })
})

app.listen(PORT, () => {
    console.log(` server is running http://localhost:${PORT}`)
})