import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useRecipesStore } from "./store/RecipesStore";
import SideBar from "./components/SideBar";
import Categories from "./components/Categories";
import Areas from "./components/Areas";
import RecipeSearch from "./components/RecipeSearch";
import AppRoutes from "./components/AppRoutes";
import { useGetRedirectPath } from "./hooks/useGetRedirectPath";

const App = () => {
  const { mealHubItem } = useRecipesStore();

  return (
    <div>
      <Header />
      <BrowserRouter>
        <SideBar />
        {mealHubItem === "categories" && <Categories />}
        {mealHubItem === "areas" && <Areas />}
        {mealHubItem === 'search' && <RecipeSearch />}
        <AppRoutes />
        <Routes>
          <Route path="/" element={<Navigate to={useGetRedirectPath()} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
