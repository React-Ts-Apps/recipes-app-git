import { ReactNode, useEffect, useState } from "react";
import { RecipesContext } from "./RecipesContext";
import instance from "../api/axios";
import { categoryProps, mealProps } from "../types";

type ChildProps = {
  children: ReactNode;
};

export const RecipesContextProvider = ({ children }: ChildProps) => {
  const [menu, setMenu] = useState<mealProps[]>([]);
  const [categories, setCategories] = useState<categoryProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Beef");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getByCategory(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getByCategory = (type: string) => {
    instance
      .get(`/filter.php?c=${type}`)
      .then((response) => setMenu(response.data.meals));
  };

  const getAllCategories = () => {
    instance
      .get("/categories.php")
      .then((response) => setCategories(response.data.categories));
  };

  const changeCategory = (val: string) => {
    setMenu([]);
    setCurrentPage(1);
    setSelectedCategory(val);
  };

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    setCurrentPage(page);
  };

  return (
    <RecipesContext.Provider
      value={{
        menu,
        categories,
        selectedCategory,
        currentPage,
        changeCategory,
        handlePageChange,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
