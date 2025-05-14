import "./App.css";
import FilteredDishes from "./components/FilteredDishes";
import Header from "./components/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RecipesLoader from "./components/RecipesLoader";
import { useRecipesStore } from "./store/RecipesStore";
import SideBar from "./components/SideBar";
import Categories from "./components/Categories";

const App = () => {
  const { selectedCategory, mealHubItem } = useRecipesStore();

  return (
    <div>
      <Header />
      <SideBar />
      <BrowserRouter>
        {mealHubItem === 'Categories' && <Categories />}
        <Routes>
          <Route
            path="/"
            element={mealHubItem === 'Categories' ? <Navigate to="/Beef/page/1" replace /> : null}
          />

          <Route
            path="/:category/page/:page"
            element={
              mealHubItem === 'Categories' ? (
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
