import "./App.css";
import Categories from "./components/Categories";
import FilteredDishes from "./components/FilteredDishes";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { RecipesContextProvider } from "./context/RecipesContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <RecipesContextProvider>
          <Categories />
          <Routes>
            <Route path="/:category/page/:page" element={<FilteredDishes />}></Route>
          </Routes>
          <Pagination />
        </RecipesContextProvider>
      </BrowserRouter>
    </div>
  );
};
export default App;
