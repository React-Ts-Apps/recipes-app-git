
export type mealProps =
  | {
    strMeal: string;
    idMeal: string;
    strMealThumb: string;
    strInstructions?: string;
    strCategory: string;
    strArea: string;
    strTags?: string;
    strYoutube?: string;
    strSource?: string;
    [key: `strIngredient${number}`]: string | null;
    [key: `strMeasure${number}`]: string | null;
  }
  | undefined;


export type categoryProps = {
  strCategory: string;
};

export type areaProps = {
  strArea: string;
};

export type ingredientProps = {
  idIngredient: string;
  strIngredient: string;
  strDescription: string | null;
  strType: string | null;
};

export type MealHubProps = 'categories' | 'areas' | 'ingredients' | 'random';

export type MealHubList = {
  categories: categoryProps[];
  areas: areaProps[];
  ingredients: ingredientProps[];
}

export type MealHubListKeyProps = keyof MealHubList;

export type MealHubListProps = {
  type: MealHubListKeyProps;
  onItemClick: (val: string) => void;
}

export type ListBaseProps = {
  type: MealHubListKeyProps;
  selectedValue: string;
}

export type PopUpProps = {
  id: string;
  description: string;
  img: string;
  type: string;
}

export type RecipesStoreState = {
  mealHubItem: string;
  selectedCategory: string;
  selectedArea: string;
  selectedIngredient: string;
  currentPage: number;
  selectedDishId: string;
  showRecipe: boolean;
  selectedDish: mealProps;
  setSelectedDishId: (id: string) => void;
  setSelectedDish: (dish: mealProps) => void;
  setSelectedCategory: (category: string) => void;
  setSelectedArea: (area: string) => void;
  setSelectedIngredient: (ing: string) => void;
  setCurrentPage: (page: number) => void;
  setMealHubItem: (type: RecipesStoreState['mealHubItem']) => void;
  handleShowRecipe: (idMeal?: string) => void;
}

