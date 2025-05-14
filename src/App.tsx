import "./App.css";
import Categories from "./components/Categories";
import FilteredDishes from "./components/FilteredDishes";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Categories />
        <Routes>
          <Route path="/:category/page/:page" element={<FilteredDishes />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
