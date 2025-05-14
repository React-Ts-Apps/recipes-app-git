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

export type RecipesState = {
  menu: mealProps[];
  categories: categoryProps[];
  selectedCategory: string;
  currentPage: number;
  showRecipe: boolean;
  selectedDish: mealProps;
  handleShowRecipe: (idMeal?: string) => void;
  changeCategory: (val: string) => void;
  handlePageChange: (page: number) => void;
};

export type RecipesStoreState = {
  selectedCategory: string;
  currentPage: number;
  selectedDishId: string;
  showRecipe: boolean;
  setSelectedCategory: (cat: string) => void;
  setCurrentPage: (page: number) => void;
  handleShowRecipe: (idMeal?: string) => void;
}
