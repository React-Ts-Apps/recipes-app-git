import { useRecipes } from "../context/useRecipes";
const Categories = () => {
  const { categories, changeCategory, selectedCategory } = useRecipes();
  return (
    <section>
      <div className="dish-categories">
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
      </div>
    </section>
  );
};
export default Categories;
