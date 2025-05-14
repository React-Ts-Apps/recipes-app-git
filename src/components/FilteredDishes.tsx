import { useMemo } from "react";
import PopUp from "./PopUp";
import { ITEMS_PER_PAGE as itemsPerPage } from "../constants";
import { useMealsByCategory } from "../hooks/recipeQueries";
import { useRecipesStore } from "../store/RecipesStore";
import Pagination from "./Pagination";

const FilteredDishes = ({ category }: { category: string }) => {
  const { currentPage, showRecipe, handleShowRecipe } = useRecipesStore()
  const { data: menu = [], isLoading, isError } = useMealsByCategory(category)

  const filteredDishes = useMemo(() => {
    const firstIndex = currentPage * itemsPerPage - itemsPerPage;
    const lastIndex = Math.min(currentPage * itemsPerPage, menu.length);
    return menu.slice(firstIndex, lastIndex);
  }, [currentPage, menu]);

  if (isLoading) return <p>Loading....</p>
  if (isError) return <p>Something went wrong</p>

  return (
    <div>
      {showRecipe && <PopUp />}
      <>
        <div className="flex h-[50vh]">
          <section className="pl-50  overflow-y-auto">
            <ul className="p-4 flex flex-wrap justify-start gap-3" role="list">
              {filteredDishes.length ? (
                filteredDishes.map(
                  (dish) =>
                    dish && (
                      <li className="group w-[20%]" key={dish.idMeal} role="listitem">
                        <div className="relative w-full">
                          <img src={dish.strMealThumb} alt={dish.strMeal} className="w-full h-auto block" />
                          <div
                            className="absolute pl-8 bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-b-lg py-2"
                            onClick={() => handleShowRecipe(dish.idMeal)}
                          >
                            Click to view
                          </div>
                        </div>

                        <h4 className="mt-2 text-sm font-semibold truncate">{dish.strMeal}</h4>
                      </li>
                    )
                )
              ) : (
                <p>No items available</p>
              )}
            </ul>
          </section>
        </div>
      </>
      <Pagination menuLength={menu.length} />
    </div>
  );
};
export default FilteredDishes;
