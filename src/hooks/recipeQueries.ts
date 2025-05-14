import { useQuery } from "@tanstack/react-query"
import { RecipeServices } from "../services/RecipeServices"

export const useCategories = () => {
    return useQuery(
        {
            queryKey: ['categories'],
            queryFn: RecipeServices.getAllCategories
        })
}

export const useMealsByCategory = (category: string) => {
    return useQuery({
        queryKey: ["meals", category],
        queryFn: () => RecipeServices.getByCategory(category),
        enabled: !!category
    })
}

export const useMealById = (id: string) => {
    return useQuery({
        queryKey: ["meal", id],
        queryFn: () => RecipeServices.getMealById(id),
        enabled: !!id
    })
}