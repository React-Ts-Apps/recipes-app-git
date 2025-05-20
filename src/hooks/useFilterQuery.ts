import { useQuery } from "@tanstack/react-query"
import { RecipeServices } from "../services/RecipeServices"
import { mealProps } from "../types"
import { useRecipesStore } from "../store/RecipesStore"

export const useMealById = (id: string) => {
    return useQuery<mealProps[]>({
        queryKey: ["selectedDish", id],
        queryFn: () => RecipeServices.getMealById(id),
        enabled: !!id
    })
}

export const useRandomMeal = () => {
    const { mealHubItem } = useRecipesStore()
    return useQuery<mealProps[]>({
        queryKey: ["random"],
        queryFn: () => RecipeServices.getRandomMeal(),
        enabled: mealHubItem === 'random'
    })
}