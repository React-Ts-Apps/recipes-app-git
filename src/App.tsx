import "./App.scss";
import Categories from "./components/Categories";
import FilteredDishes from "./components/FilteredDishes";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { RecipesContextProvider } from "./context/RecipesContextProvider";

const App = () => {
  return (
    <div>
      <Header />
      <RecipesContextProvider>
        <Categories />
        <FilteredDishes />
        <Pagination />
      </RecipesContextProvider>
    </div>
  );
};
export default App;
