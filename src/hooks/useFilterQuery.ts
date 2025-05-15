import { useQuery } from "@tanstack/react-query"
import { RecipeServices } from "../services/RecipeServices"
import { mealProps } from "../types"

export const useMealById = (id: string) => {
    return useQuery<mealProps>({
        queryKey: ["selectedDish", id],
        queryFn: () => RecipeServices.getMealById(id),
        enabled: !!id
    })
}