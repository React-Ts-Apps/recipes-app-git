
export type mealProps =
  | {
    strMealThumb: string;
    strMeal: string;
    idMeal: string;
    strInstructions?: string;
  }
  | undefined;

export type categoryProps = {
  strCategory: string;
};

export type RecipesStoreState = {
  mealHubItem: string;
  selectedCategory: string;
  currentPage: number;
  selectedDishId: string;
  showRecipe: boolean;
  setSelectedCategory: (category: string) => void;
  setCurrentPage: (page: number) => void;
  setMealHubItem: (cat: string) => void;
  handleShowRecipe: (idMeal?: string) => void;
}
