import { useNavigate } from "react-router-dom"
import { useRecipesStore } from "../store/RecipesStore"
import ListBase from "./ListBase"

const Areas = () => {
    const navigate = useNavigate()
    const { setSelectedArea, mealHubItem } = useRecipesStore()

    function handleChange(areaName: string) {
        setSelectedArea(areaName)
        navigate(`/${mealHubItem}/${areaName}/page/1`, { replace: true })
    }

    return <ListBase type='areas' onItemClick={(name) => handleChange(name)} />
}
export default Areas