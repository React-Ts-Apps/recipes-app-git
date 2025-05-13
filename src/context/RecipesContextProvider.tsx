import { ReactNode, useEffect, useState } from "react";
import { RecipesContext } from "./RecipesContext";
import { categoryProps, mealProps } from "../types";
import { useNavigate } from "react-router-dom";
import { RecipesService } from "../services/RecipesService";

type ChildProps = {
  children: ReactNode;
};

export const RecipesContextProvider = ({ children }: ChildProps) => {
  const [menu, setMenu] = useState<mealProps[]>([]);
  const [categories, setCategories] = useState<categoryProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Beef");
  const [currentPage, setCurrentPage] = useState(1);
  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedDish, setSelectedDish] = useState<mealProps | undefined>(
    undefined
  );

  const navigate = useNavigate()

  // Load all meal categories
  useEffect(() => {
    RecipesService.getAllCategories().then(setCategories)
  }, []);

  //Load items belongs to selected category
  useEffect(() => {
    RecipesService.getByCategory(selectedCategory).then(setMenu)
  }, [selectedCategory]);

  const changeCategory = (val: string) => {
    if (val === selectedCategory) return
    setMenu([]);
    setCurrentPage(1);
    setSelectedCategory(val);
    navigate(`${val}/page/1`, { replace: true })
  }

  const handlePageChange = (page: number) => {
    if (page === currentPage) return
    console.log(page)
    setCurrentPage(page);
    navigate(`${selectedCategory}/page/${page}`, { replace: true })
  };

  //Show selected recipe in popup
  const handleShowRecipe = (idMeal?: string) => {
    if (idMeal) {
      RecipesService.getMealById(idMeal).then(setSelectedDish)
    }
    setShowRecipe((prevShowRecipe) => !prevShowRecipe);
  };

  return (
    <RecipesContext.Provider
      value={{
        menu,
        categories,
        selectedCategory,
        currentPage,
        showRecipe,
        handleShowRecipe,
        changeCategory,
        handlePageChange,
        selectedDish,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
