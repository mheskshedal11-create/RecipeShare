import express from 'express'
import { addRecipes, deleteRecipe, editRecipes, getRecipe, getRecipes } from '../controller/recipe.controller.js'

export const recipeRouter = express.Router()

recipeRouter.post('/', addRecipes)
recipeRouter.get('/', getRecipes)
recipeRouter.get('/:id', getRecipe)
recipeRouter.put('/:id', editRecipes)
recipeRouter.delete('/:id', deleteRecipe)