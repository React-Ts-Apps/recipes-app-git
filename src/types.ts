
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

export type areaProps = {
  strArea: string;
};

export type ingredientProps = {
  strIngredient: string;
};

export type ListType = 'categories' | 'areas' | 'ingredients';

export type ListMap = {
  categories: categoryProps[];
  areas: areaProps[];
  ingredients: ingredientProps[];
}

export type RecipesStoreState = {
  mealHubItem: string;
  selectedCategory: string;
  selectedArea: string;
  selectedIngredient: string;
  currentPage: number;
  selectedDishId: string;
  showRecipe: boolean;
  setSelectedCategory: (category: string) => void;
  setSelectedArea: (area: string) => void;
  setSelectedIngredient: (ing: string) => void;
  setCurrentPage: (page: number) => void;
  setMealHubItem: (cat: string) => void;
  handleShowRecipe: (idMeal?: string) => void;
}

export type ListBaseProps = {
  type: ListType;
  onItemClick: (val: string) => void;
}