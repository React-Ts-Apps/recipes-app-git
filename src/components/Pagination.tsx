import { ITEMS_PER_PAGE } from "../constants";
import { useRecipesStore } from "../store/RecipesStore";

const Pagination = ({ menuLength }: { menuLength: number }) => {
  const { currentPage, setCurrentPage } = useRecipesStore();
  const itemsLength = Math.ceil(menuLength / ITEMS_PER_PAGE);
  const pages = [];
  for (let i = 1; i <= itemsLength; i++) {
    pages.push(i);
  }
  return (
    <section>
      <div className="pl-50 pr-30">
        <ul className="flex flex-wrap gap-md justify-center pb-50 mt-10">
          {pages.map((page, index) => (
            <li
              key={index}
              className={`w-[30px] h-[30px] border border-gray-400 mx-1 flex items-center justify-center cursor-pointer p-2 transition-all ease-in-out text-white ${currentPage === page ? "bg-black" : "bg-orange-600 hover:bg-black"}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Pagination;
