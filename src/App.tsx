import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useRecipesStore } from "./store/RecipesStore";
import SideBar from "./components/SideBar";
import Categories from "./components/Categories";
import Areas from "./components/Areas";
import MealListBase from "./components/MealListBase";
import MealDetails from "./components/MealDetails";
import IngredientList from "./components/IngredientList";
import RecipeByIngredient from "./components/RecipeByIngredient";
import RecipeSearch from "./components/RecipeSearch";

const App = () => {
  const { selectedCategory, selectedArea, mealHubItem } = useRecipesStore();
  const getRedirectPath = () => {
    if (mealHubItem === "categories" && selectedCategory) return `/categories/${selectedCategory}/page/1`;
    if (mealHubItem === "areas" && selectedArea) return `/areas/${selectedArea}/page/1`;
    if (mealHubItem === 'random') return '/random';
    if (mealHubItem === 'ingredients') return '/ingredients'
    if (mealHubItem === 'search') return '/search'
    return "/";
  };

  return (
    <div>
      <Header />
      <BrowserRouter>
        <SideBar />
        {mealHubItem === "categories" && <Categories />}
        {mealHubItem === "areas" && <Areas />}
        <Routes>
          <Route path="/" element={<Navigate to={getRedirectPath()} replace />} />

          <Route
            path="/categories/:category/page/:page"
            element={
              mealHubItem === "categories" ? (
                <MealListBase type="categories" />
              ) : null
            }
          />

          <Route
            path="/areas/:area/page/:page"
            element={
              mealHubItem === "areas" ? (
                <MealListBase type="areas" />
              ) : null
            }
          />

          <Route path='/random' element={<MealDetails />} />
          <Route path='/view/:id' element={<MealDetails />} />
          <Route path='/ingredients' element={<IngredientList type="ingredients" />} />
          <Route
            path="/ingredients/:ingredient/page/:page"
            element={
              mealHubItem === "ingredients" ? (
                <RecipeByIngredient />
              ) : null
            }
          />
          <Route path="/search" element={<RecipeSearch />} />
          <Route
            path="/search/:searchText/page/:page"
            element={
              mealHubItem === "search" ? (
                <>
                  <RecipeSearch />
                  <MealListBase type="search" />
                </>
              ) : null
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
