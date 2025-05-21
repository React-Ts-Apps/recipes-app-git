import { useRecipesStore } from "../store/RecipesStore";
import AppRoutes from "./AppRoutes";
import Areas from "./Areas";
import Categories from "./Categories";
import Header from "./Header";
import SideBar from "./SideBar";

const LayOut = () => {
    const { mealHubItem } = useRecipesStore();

    return (
        <div>
            <Header />
            <SideBar />
            {mealHubItem === "categories" && <Categories />}
            {mealHubItem === "areas" && <Areas />}
            <AppRoutes />
        </div>
    )
}

export default LayOut