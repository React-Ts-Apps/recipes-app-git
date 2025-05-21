
export type MealProps =
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


export type CategoryProps = {
  strCategory: string;
};

export type AreaProps = {
  strArea: string;
};

export type IngredientProps = {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string;
  imgSrc: string;
};

export type MealHubProps = 'categories' | 'areas' | 'ingredients' | 'random' | 'search';

export type MealHubGroups = {
  categories: CategoryProps[];
  areas: AreaProps[];
  ingredients: IngredientProps[];
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
  mealHubItem: MealHubProps;
  selectedCategory: string;
  selectedArea: string;
  currentPage: number;
  selectedDishId: string;
  showPopUp: boolean;
  selectedDish: MealProps;
  selectedIngredient: string;
  searchText: string;
  setSearchText: (search: string) => void;
  setSelectedDishId: (id: string) => void;
  setSelectedDish: (dish: MealProps) => void;
  setSelectedCategory: (category: string) => void;
  setSelectedArea: (area: string) => void;
  setSelectedIngredient: (ing: string) => void;
  setCurrentPage: (page: number) => void;
  setMealHubItem: (type: MealHubProps) => void;
  handleShowPopUp: (idMeal?: string) => void;
  closePopUp: () => void;
}

