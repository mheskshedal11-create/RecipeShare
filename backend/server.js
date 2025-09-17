import express from 'express';
import dotenv from 'dotenv';
import recipeRouter from './router/recipe.router.js';
import dbConfig from './db/config.js';
import cors from 'cors'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

dbConfig();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('RecipeShare API is running');
});

app.use('/api/recipes', recipeRouter);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
