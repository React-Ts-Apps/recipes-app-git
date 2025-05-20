
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
  strDescription: string;
  strType: string;
  imgSrc: string;
};

export type MealHubProps = 'categories' | 'areas' | 'ingredients' | 'random' | 'search';

export type MealHubGroups = {
  categories: categoryProps[];
  areas: areaProps[];
  ingredients: ingredientProps[];
}

export type MealHubGroupsKeys = keyof MealHubGroups;

export type MealHubListProps = {
  type: MealHubGroupsKeys;
  onItemClick: (val: string) => void;
}

export type PopUpProps = {
  id: string;
  description: string;
  imgSrc: string;
  type: string;
  name: string;
}

export type RecipesStoreState = {
  mealHubItem: string;
  selectedCategory: string;
  selectedArea: string;
  currentPage: number;
  selectedDishId: string;
  showPopUp: boolean;
  selectedDish: mealProps;
  selectedIngredient: string;
  searchText: string;
  setSearchText: (search: string) => void;
  setSelectedDishId: (id: string) => void;
  setSelectedDish: (dish: mealProps) => void;
  setSelectedCategory: (category: string) => void;
  setSelectedArea: (area: string) => void;
  setSelectedIngredient: (ing: string) => void;
  setCurrentPage: (page: number) => void;
  setMealHubItem: (type: RecipesStoreState['mealHubItem']) => void;
  handleShowPopUp: (idMeal?: string) => void;
  closePopUp: () => void;
}

