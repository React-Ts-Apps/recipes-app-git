import { X, Menu } from "lucide-react"
import { useState } from "react"

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <>
            <button className="fixed left-4 top-40 z-50 text-gray-800" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <div className={`fixed top-50 left-0 p-5 h-full ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <h1 className="text-green-900 text-xl font-semibold mb-8"> Recipe Hub</h1>
                <nav className="flex flex-col gap-4 text-gray-700 font-medium">
                    <div className="hover:text-green-500">Categories</div>
                    <div className="hover:text-green-500">Areas</div>
                    <div className="hover:text-green-500">Ingredients</div>
                    <div className="hover:text-green-500">Random Meal</div>
                    <div className="hover:text-green-500">Favorites</div>
                </nav>
            </div>
        </>
    )
}
export default SideBar