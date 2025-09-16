import express from 'express'
import dotenv from 'dotenv'
import { recipeRouter } from './router/recipe.router.js';


dotenv.config()
const PORT = process.env.PORT || 5000

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'hello' })
})
app.use('/api/v1/recipe', recipeRouter)
app.listen(PORT, () => {
    console.log(` server is running http://localhost:${PORT}`)
})