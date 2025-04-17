import "./App.scss";
import FilteredDishes from "./components/FilteredDishes";
import Header from "./components/Header";
import { RecipesContextProvider } from "./context/RecipesContextProvider";
const App = () => {
  return (
    <div>
      <Header />
      <RecipesContextProvider>
        <FilteredDishes />
      </RecipesContextProvider>
    </div>
  );
};
export default App;
