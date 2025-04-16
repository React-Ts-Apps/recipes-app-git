import { mealProps } from "../types";
type SpecialDishesProps = {
  specialDishes: mealProps[];
};
const MAX_SPECIAL = 8;

const SpecialDishes = ({ specialDishes }: SpecialDishesProps) => {
  return (
    <section className="special-dishes">
      <div className="special-dishes-content text-center">
        <div>
          <h2>Our Special Dishes</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            quasi illum beatae, esse ad vitae? Totam id provident excepturi unde
            temporibus magnam.
          </p>
          <div className="special-dishes-list">
            <ul className="flex flex-wrap gap-md">
              {specialDishes.slice(0, MAX_SPECIAL).map((dish, index) => (
                <li key={index}>
                  <img src={dish.strMealThumb}></img>
                  <h4>{dish.strMeal}</h4>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SpecialDishes;
