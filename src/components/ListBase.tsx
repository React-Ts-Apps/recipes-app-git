import { useListQuery } from "../hooks/useListQuery"
import { areaProps, categoryProps, ingredientProps, ListBaseProps } from "../types"
import { useSelectedList } from "../utils/useSelectedList"

const ListBase = ({ type, onItemClick }: ListBaseProps) => {
    const selectedList = useSelectedList()
    const { data = [], isError, isLoading } = useListQuery(type)

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Something went wrong...</p>

    const extractName = (item: categoryProps | areaProps | ingredientProps) => {
        if (type === 'categories') return (item as categoryProps).strCategory;
        if (type === 'areas') return (item as areaProps).strArea;
        if (type === 'ingredients') return (item as ingredientProps).strIngredient;
        return ''
    }

    return (
        <section>
            <div className="pl-40 pr-30">
                <ul className="p-4 flex flex-wrap gap-3 justify-center w-full" role="list">
                    {data.map((item, index) => {
                        const name = extractName(item);
                        return (
                            < li
                                key={index}
                                onClick={() => onItemClick(name)}
                                className={`px-4 py-2 rounded text-sm md:text-base font-medium tracking-wide text-white cursor-pointer transition-colors shadow-md hover:shadow-lg
                                ${selectedList === name ? "bg-black" : "bg-orange-600 hover:bg-black"}`}
                            >
                                {name}
                            </li>
                        )
                    })}
                </ul>

            </div>
        </section >
    )

}
export default ListBase