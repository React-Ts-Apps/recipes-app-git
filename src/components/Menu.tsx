import instance from "../api/axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import FilteredDishes from "./FilteredDishes";
import { mealProps, categoryProps } from "../types";

const Menu = () => {
  const [menu, setMenu] = useState<mealProps[]>([]);
  const [categories, setCategories] = useState<categoryProps[]>([]);
  const [category, setCategory] = useState("Beef");

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
    setCategory(val);
  };

  useEffect(() => {
    getByCategory(category);
  }, [category]);

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div>
      <Header />
      <FilteredDishes
        filteredDishes={menu}
        categories={categories}
        changeCategory={changeCategory}
        selectedCategory={category}
      />
    </div>
  );
};
export default Menu;
