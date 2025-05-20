import { Route, Routes } from "react-router-dom"
import { useRecipesStore } from "../store/RecipesStore"
import MealListBase from "./MealListBase"
import MealDetails from "./MealDetails"
import IngredientList from "./IngredientList"

const AppRoutes = () => {
    const { mealHubItem } = useRecipesStore()
    return (
        <Routes>
            <Route path="/categories/:category/page/:page" element={
                mealHubItem === "categories" ? (
                    <MealListBase />
                ) : null
            }
            />
            <Route path="/areas/:area/page/:page" element={
                mealHubItem === "areas" ? (
                    <MealListBase />
                ) : null
            }
            />
            <Route path='/random' element={<MealDetails />} />
            <Route path='/view/:id' element={<MealDetails />} />
            <Route path='/ingredients' element={<IngredientList type="ingredients" />} />
            <Route path="/ingredients/:ingredient/page/:page" element={
                mealHubItem === "ingredients" ? (
                    <MealListBase />
                ) : null
            }
            />
            <Route path="/search/:searchText/page/:page" element={
                mealHubItem === "search" ? (
                    <MealListBase />
                ) : null
            }
            />
        </Routes>
    )

}
export default AppRoutes