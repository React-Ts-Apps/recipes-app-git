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
