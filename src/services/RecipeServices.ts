import instance from "../api/axios";

export class RecipeServices {
    static async getAllCategories() {
        const res = await instance.get("categories.php")
        return res.data.categories
    }

    static async getByCategory(category: string) {
        const res = await instance.get(`/filter.php?c=${category}`)
        return res.data.meals
    }

    static async getMealById(id: string) {
        const res = await instance.get(`/lookup.php?i=${id}`)
        return res.data.meals[0]
    }
}