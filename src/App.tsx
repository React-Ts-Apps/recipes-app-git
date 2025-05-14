import "./App.css";
import Categories from "./components/Categories";
import FilteredDishes from "./components/FilteredDishes";
import Header from "./components/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RecipesLoader from "./components/RecipesLoader";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Categories />
        <Routes>
          <Route path="/" element={<Navigate to="/Beef/page/1" replace />} />
          <Route path="/:category/page/:page"
            element={<><RecipesLoader /><FilteredDishes /></>}></Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
};
export default App;
