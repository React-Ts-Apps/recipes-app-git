import { useRecipes } from "../context/useRecipes";
import { useMemo } from "react";
import PopUp from "./PopUp";
import { ITEMS_PER_PAGE as itemsPerPage } from "../constants";

const FilteredDishes = () => {
  const { menu, currentPage, handleShowRecipe, showRecipe } = useRecipes();

  const filteredDishes = useMemo(() => {
    const firstIndex = currentPage * itemsPerPage - itemsPerPage;
    const lastIndex = Math.min(currentPage * itemsPerPage, menu.length);
    return menu.slice(firstIndex, lastIndex);
  }, [currentPage, menu]);

  return (
    <div>
      {showRecipe && <PopUp />}
      <section className="special-dishes">
        <div className="special-dishes-content text-center">
          <div className="special-dishes-list">
            <ul className="flex flex-wrap gap-md" role="list">
              {filteredDishes.length ? (
                filteredDishes.map(
                  (dish) =>
                    dish && (
                      <li key={dish.idMeal} role="listitem">
                        <div className="image-wrapper">
                          <img src={dish.strMealThumb} />
                          <div
                            className="overlay-text"
                            onClick={() => handleShowRecipe(dish.idMeal)}
                          >
                            Click to view
                          </div>
                        </div>

                        <h4>{dish.strMeal}</h4>
                      </li>
                    )
                )
              ) : (
                <p>No items available</p>
              )}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default FilteredDishes;
