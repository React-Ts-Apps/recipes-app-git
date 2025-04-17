import { useRecipes } from "../context/useRecipes";
import { useMemo } from "react";
import Pagination from "./Pagination";

const FilteredDishes = () => {
  const itemsPerPage = 8;

  const { categories, changeCategory, selectedCategory, menu, currentPage } =
    useRecipes();

  const filteredDishes = useMemo(() => {
    const firstIndex = currentPage * itemsPerPage - itemsPerPage;
    const lastIndex = Math.min(currentPage * itemsPerPage, menu.length);
    return menu.slice(firstIndex, lastIndex);
  }, [currentPage, menu]);

  return (
    <div>
      <section className="dish-categories text-center">
        <ul className="flex flex-wrap gap-md" role="list">
          {categories.map((category, index) => (
            <li
              className={
                selectedCategory == category.strCategory ? "active" : ""
              }
              key={index}
              onClick={() => changeCategory(category.strCategory)}
            >
              {category.strCategory}
            </li>
          ))}
        </ul>
      </section>
      <section className="special-dishes">
        <div className="special-dishes-content text-center">
          <div className="special-dishes-list">
            <ul className="flex flex-wrap gap-md" role="list">
              {filteredDishes.length ? (
                filteredDishes.map((dish, index) => (
                  <li key={index} role="listitem">
                    <img src={dish.strMealThumb}></img>
                    <h4>{dish.strMeal}</h4>
                  </li>
                ))
              ) : (
                <p>No items available</p>
              )}
            </ul>
          </div>
        </div>
      </section>
      <Pagination itemsLength={Math.ceil(menu.length / itemsPerPage)} />
    </div>
  );
};
export default FilteredDishes;
