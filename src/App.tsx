import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RecipesLoader from "./components/RecipesLoader";
import { useRecipesStore } from "./store/RecipesStore";
import SideBar from "./components/SideBar";
import Categories from "./components/Categories";
import Areas from "./components/Areas";
import MealListBase from "./components/MealListBase";
import MealDetails from "./components/MealDetails";

const App = () => {
  const { selectedCategory, selectedArea, mealHubItem } = useRecipesStore();

  const getRedirectPath = () => {
    if (mealHubItem === "categories" && selectedCategory) return `/categories/${selectedCategory}/page/1`;
    if (mealHubItem === "areas" && selectedArea) return `/areas/${selectedArea}/page/1`;
    if (mealHubItem === 'random') return '/random';
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
                <>
                  <RecipesLoader />
                  <MealListBase type="categories" selectedValue={selectedCategory} />
                </>
              ) : null
            }
          />

          <Route
            path="/areas/:area/page/:page"
            element={
              mealHubItem === "areas" ? (
                <>
                  <RecipesLoader />
                  <MealListBase type="areas" selectedValue={selectedArea} />
                </>
              ) : null
            }
          />

          <Route path='/random' element={<MealDetails />} />
          <Route path='/view/:id' element={<MealDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
