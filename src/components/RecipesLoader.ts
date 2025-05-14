import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecipesStore } from "../store/RecipesStore";

const RecipesLoader = () => {
    const { category = "Beef", page = "1" } = useParams();
    const { setSelectedCategory, setCurrentPage } = useRecipesStore();

    useEffect(() => {
        setSelectedCategory(category);
        setCurrentPage(parseInt(page));
    }, [category, page, setSelectedCategory, setCurrentPage]);

    return null;
};

export default RecipesLoader;
