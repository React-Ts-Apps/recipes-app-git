import instance from "../api/axios";

export class RecipeServices {
    static async getAllCategories() {
        const res = await instance.get("list.php?c=list")
        return res.data.meals
    }

    static async getAllAreas() {
        const res = await instance.get("list.php?a=list")
        return res.data.meals
    }

    static async getAllIngredients() {
        const res = await instance.get("list.php?i=list")
        return res.data.meals
    }

    static async getByCategory(category: string) {
        const res = await instance.get(`/filter.php?c=${category}`)
        return res.data.meals
    }

    static async getByArea(area: string) {
        const res = await instance.get(`/filter.php?a=${area}`)
        return res.data.meals
    }

    static async getByIngredient(ing: string) {
        const res = await instance.get(`/filter.php?i=${ing}`)
        return res.data.meals
    }

    static async getMealById(id: string) {
        const res = await instance.get(`/lookup.php?i=${id}`)
        return res.data.meals[0]
    }

    static async getRandomMeal() {
        const res = await instance.get('/random.php')
        return res.data.meals[0]
    }
}