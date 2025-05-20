import { useRecipesStore } from "../store/RecipesStore"

export const useGetRedirectPath = () => {
    const { mealHubItem, selectedCategory, selectedArea } = useRecipesStore()
    if (mealHubItem === "categories" && selectedCategory) return `/categories/${selectedCategory}/page/1`;
    if (mealHubItem === "areas" && selectedArea) return `/areas/${selectedArea}/page/1`;
    if (mealHubItem === 'random') return '/random';
    if (mealHubItem === 'ingredients') return '/ingredients'
    if (mealHubItem === 'search') return '/search'
    return "/";
}