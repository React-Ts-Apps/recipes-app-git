import { createContext } from "react";
import { mealProps, categoryProps } from "../types";

type RecipesContextProps = {
  menu: mealProps[];
  categories: categoryProps[];
  selectedCategory: string;
  currentPage: number;
  changeCategory: (val: string) => void;
  handlePageChange: (page: number) => void;
};

export const RecipesContext = createContext<RecipesContextProps | undefined>(
  undefined
);
