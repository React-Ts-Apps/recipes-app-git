import { useQuery } from "@tanstack/react-query";
import { RecipeServices } from "../services/RecipeServices";
import { MealHubListKeyProps, mealProps } from "../types";

const getQueryFn = (type: MealHubListKeyProps, value: string) => {
    switch (type) {
        case 'categories': return () => RecipeServices.getByCategory(value);
        case 'areas': return () => RecipeServices.getByArea(value);
        case 'ingredients': return () => RecipeServices.getByIngredient(value);
        default: throw new Error('Invalid type');
    }
};

export const useFilterByTypeQuery = (filterType: MealHubListKeyProps, value: string) => {
    return useQuery<mealProps[]>({
        queryKey: ["menu", filterType, value],
        queryFn: getQueryFn(filterType, value),
        enabled: !!value,
    })
}