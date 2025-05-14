import "./App.css";
import FilteredDishes from "./components/FilteredDishes";
import Header from "./components/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RecipesLoader from "./components/RecipesLoader";
import { useRecipesStore } from "./store/RecipesStore";
import SideBar from "./components/SideBar";
import Categories from "./components/Categories";
import Areas from "./components/Areas";

const App = () => {
  const { selectedCategory, mealHubItem } = useRecipesStore();
  console.log("Current Meal Hub Item:", mealHubItem);
  return (
    <div>
      <Header />
      <SideBar />
      <BrowserRouter>
        {mealHubItem === 'categories' && <Categories />}
        {mealHubItem === 'areas' && <Areas />}
        <Routes>

          <Route
            path="/"
            element={mealHubItem === 'categories' ? <Navigate to="/Beef/page/1" replace /> : null}
          />

          <Route
            path="/:category/page/:page"
            element={
              mealHubItem === 'categories' ? (
                <>
                  <RecipesLoader />
                  <FilteredDishes category={selectedCategory} />
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
