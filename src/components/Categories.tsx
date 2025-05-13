import { useRecipes } from "../context/useRecipes";
const Categories = () => {
  const { categories, changeCategory, selectedCategory } = useRecipes();
  return (
    <section>
      <div className="pl-40 pr-30">
        <ul className="p-4 flex flex-wrap gap-3 justify-center w-full" role="list">
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => changeCategory(category.strCategory)}
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
