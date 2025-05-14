import { useQuery } from "@tanstack/react-query"
import { RecipeServices } from "../services/RecipeServices"
import { categoryProps, mealProps } from "../types"
import { useRecipesStore } from "../store/RecipesStore"

export const useCategories = () => {
    const { mealHubItem } = useRecipesStore()
    return useQuery<categoryProps[]>(
        {
            queryKey: ['categories'],
            queryFn: RecipeServices.getAllCategories,
            enabled: mealHubItem === 'Categories',
        })
}

export const useMealsByCategory = (category: string) => {
    return useQuery<mealProps[]>({
        queryKey: ["menu", category],
        queryFn: () => RecipeServices.getByCategory(category),
        enabled: !!category
    })
}

export const useMealById = (id: string) => {
    return useQuery<mealProps>({
        queryKey: ["selectedDish", id],
        queryFn: () => RecipeServices.getMealById(id),
        enabled: !!id
    })
}