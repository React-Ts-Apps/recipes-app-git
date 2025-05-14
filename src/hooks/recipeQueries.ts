import { useQuery } from "@tanstack/react-query"
import { RecipeServices } from "../services/RecipeServices"
import { categoryProps, mealProps } from "../types"

export const useCategories = () => {
    return useQuery<categoryProps[]>(
        {
            queryKey: ['categories'],
            queryFn: RecipeServices.getAllCategories
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