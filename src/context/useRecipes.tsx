import { useContext } from "react";
import { RecipesContext } from "./RecipesContext";

export function useRecipes() {
  const context = useContext(RecipesContext);
  if (!context) throw new Error("Empty context not allowed");

  return context;
}
