import { X, Menu } from "lucide-react"
import { useState } from "react"
import { useRecipesStore } from "../store/RecipesStore"

const mealHubItems = ['Categories', 'World Flavours', 'Ingredients', 'Random Meal', 'Favourites']

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true)
    const { mealHubItem, setMealHubItem } = useRecipesStore()

    const handleHubChange = (item: string) => {
        if (mealHubItem === item) return
        setMealHubItem(item)
    }
    return (
        <>
            <button className="fixed left-4 top-40 z-50 text-gray-800" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <div className={`fixed top-50 left-0 p-5 h-full ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <h1 className=" text-xl font-semibold mb-8"> Recipe Hub</h1>
                <nav className="flex flex-col gap-4 text-gray-700 font-medium cursor-pointer">
                    {
                        mealHubItems.map((item, index) => (
                            <div key={index + item} onClick={() => handleHubChange(item)} className={`hover:text-green-500 
                                ${item === mealHubItem ? "text-red-700" :
                                    "text-green-900"}`}>{item}</div>
                        ))
                    }
                </nav>
            </div>
        </>
    )
}
export default SideBar