import instance from "../api/axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import FilteredDishes from "./FilteredDishes";
import { mealProps, categoryProps } from "../types";
import Pagination from "./Pagination";

const Menu = () => {
  const [menu, setMenu] = useState<mealProps[]>([]);
  const [categories, setCategories] = useState<categoryProps[]>([]);
  const [category, setCategory] = useState("Beef");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  useEffect(() => {
    getByCategory(category);
  }, [category]);

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
    setCategory(val);
  };

  const paginatedItems = () => {
    const firstIndex = currentPage * itemsPerPage - itemsPerPage;
    const lastIndex = Math.min(currentPage * itemsPerPage, menu.length);
    return menu.slice(firstIndex, lastIndex);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />
      <FilteredDishes
        filteredDishes={paginatedItems()}
        categories={categories}
        changeCategory={changeCategory}
        selectedCategory={category}
      />
      <Pagination
        itemsLength={Math.ceil(menu.length / itemsPerPage)}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};
export default Menu;
