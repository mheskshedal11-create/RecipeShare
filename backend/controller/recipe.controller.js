import Recipe from "../model/recipe.model.js";

export const addRecipes = async (req, res) => {
    try {
        if (!req.body) {

            return res.status(400).json({ message: "Request body is missing" });

        }

        const { title, ingredients, instructions, time } = req.body;

        if (!title || !ingredients || !instructions || !time) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newRecipe = await Recipe.create({
            title,
            ingredients,
            instructions,
            time,
        });

        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export const getRecipes = async (req, res) => {
    const recipes = await Recipe.find()
    return res.json(recipes)

}
export const getRecipe = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    res.json(recipe)

}
export const editRecipes = async (req, res) => {
    const { title, ingredients, instructions, time } = req.body;
    let recipe = await Recipe.findById(req.params.id)
    try {
        if (recipe) {
            await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.json({ title, ingredients, instructions, time })
        }
    } catch (error) {
        return res.status(404).json({ message: 'error' })
    }


}
export const deleteRecipe = async (req, res) => {

}
