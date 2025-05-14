
import { useNavigate } from "react-router-dom";
import { useCategories } from "../hooks/recipeQueries";
import { useRecipesStore } from "../store/RecipesStore";


const Categories = () => {
  const { data: categories = [], isLoading, isError } = useCategories()
  const { selectedCategory, setSelectedCategory } = useRecipesStore()
  const navigate = useNavigate()

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName)
    navigate(`${categoryName}/page/1`, { replace: true })
  }

  return (
    <section>
      <div className="pl-40 pr-30">
        <ul className="p-4 flex flex-wrap gap-3 justify-center w-full" role="list">
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleCategoryChange(category.strCategory)}
              className={`px-4 py-2 rounded text-sm md:text-base font-medium tracking-wide text-white cursor-pointer transition-colors shadow-md hover:shadow-lg
        ${selectedCategory === category.strCategory ? "bg-black" : "bg-orange-600 hover:bg-black"}`}
            >
              {category.strCategory}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};
export default Categories;
