import { useRecipes } from "../context/useRecipes";

const PopUp = () => {
  const { selectedDish, handleShowRecipe } = useRecipes();

  return (
    <div className="popup">
      <div className="popup-container">
        {selectedDish && (
          <>
            <img src={selectedDish.strMealThumb} alt="Dish" />
            <p className="meal-title">{selectedDish.strMeal}</p>
            <div className="popup-container-text">
              <p> {selectedDish.strInstructions}</p>
            </div>

            <button onClick={() => handleShowRecipe()}>close</button>
          </>
        )}
      </div>
    </div>
  );
};
export default PopUp;
