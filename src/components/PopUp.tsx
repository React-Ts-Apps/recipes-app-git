import { useRecipes } from "../context/useRecipes";

const PopUp = () => {
  const { selectedDish, handleShowRecipe } = useRecipes();

  if (!selectedDish) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white dark:bg-gray-100 rounded-lg shadow-lg w-[90vw] max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        <img
          src={selectedDish.strMealThumb}
          alt={selectedDish.strMeal}
          className="w-full p-2 h-[300px] object-cover rounded-t-lg"
        />

        <h2 className="text-lg font-semibold text-center my-2 px-4">
          {selectedDish.strMeal}
        </h2>

        <div className="overflow-y-auto px-6 py-4 text-sm leading-relaxed text-justify max-h-[calc(90vh-380px)]">
          {selectedDish.strInstructions}
        </div>

        <div className="flex justify-end px-6 py-3">
          <button
            onClick={() => handleShowRecipe()}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
