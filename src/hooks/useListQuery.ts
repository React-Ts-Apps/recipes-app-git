import { useQuery } from "@tanstack/react-query"
import { MealHubList, MealHubListKeyProps } from "../types"
import { useRecipesStore } from "../store/RecipesStore"
import { RecipeServices } from "../services/RecipeServices"

const listQueryFn = (type: MealHubListKeyProps) => {
    switch (type) {
        case 'categories': return RecipeServices.getAllCategories;
        case 'areas': return RecipeServices.getAllAreas;
        case 'ingredients': return RecipeServices.getAllIngredients;
        default: throw new Error('Unknown list type')
    }
}

export const useListQuery = <T extends MealHubListKeyProps>(type: T) => {
    const { mealHubItem } = useRecipesStore()
    return useQuery<MealHubList[T]>({
        queryKey: ["groups", type],
        queryFn: listQueryFn(type),
        enabled: mealHubItem === type,
    });
}