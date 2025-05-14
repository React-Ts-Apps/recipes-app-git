import { useQuery } from "@tanstack/react-query"
import { RecipeServices } from "../services/RecipeServices"
import { mealProps } from "../types"

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