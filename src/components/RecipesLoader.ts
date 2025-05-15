import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecipesStore } from "../store/RecipesStore";

const RecipesLoader = () => {
    const { category = "Beef", area = "American", page = "1" } = useParams();
    const {
        setSelectedCategory,
        setSelectedArea,
        setCurrentPage,
        mealHubItem,
    } = useRecipesStore();

    useEffect(() => {
        if (mealHubItem === "categories") {
            setSelectedCategory(category);
        } else if (mealHubItem === "areas") {
            setSelectedArea(area);
        }

        setCurrentPage(parseInt(page));
    }, [category, area, page, mealHubItem, setSelectedCategory, setSelectedArea, setCurrentPage]);

    return null;
};

export default RecipesLoader;