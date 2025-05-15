import { useNavigate } from "react-router-dom";
import { useRecipesStore } from "../store/RecipesStore";
import ListBase from "./ListBase";


const Categories = () => {
  const navigate = useNavigate();
  const { setSelectedCategory, mealHubItem } = useRecipesStore()

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName)
    navigate(`/${mealHubItem}/${categoryName}/page/1`, { replace: true })
  }

  return (
    <ListBase type="categories" onItemClick={(name) => handleCategoryChange(name)} />
  );
};
export default Categories;
