import { categoryProps, mealProps } from "../types";
type FilteredDishesProps = {
  filteredDishes: mealProps[];
  categories: categoryProps[];
  selectedCategory: string;
  changeCategory: (val: string) => void;
};

const FilteredDishes = ({
  filteredDishes,
  categories,
  changeCategory,
  selectedCategory,
}: FilteredDishesProps) => {
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
    </div>
  );
};
export default FilteredDishes;
