import { useQuery } from "@tanstack/react-query"
import { ListMap, ListType } from "../types"
import { useRecipesStore } from "../store/RecipesStore"
import { RecipeServices } from "../services/RecipeServices"

const listQueryFn = (type: ListType) => {
    switch (type) {
        case 'categories': return RecipeServices.getAllCategories;
        case 'areas': return RecipeServices.getAllAreas;
        case 'ingredients': return RecipeServices.getAllIngredients;
        default: throw new Error('Unknown list type')
    }
}

export const useListQuery = <T extends ListType>(type: T) => {
    const { mealHubItem } = useRecipesStore()
    return useQuery<ListMap[T]>({
        queryKey: [type],
        queryFn: listQueryFn(type),
        enabled: mealHubItem === type,
    });
}