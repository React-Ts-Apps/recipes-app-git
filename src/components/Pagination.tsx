import { useRecipes } from "../context/useRecipes";
import { ITEMS_PER_PAGE } from "../constants";

const Pagination = () => {
  const { currentPage, handlePageChange, menu } = useRecipes();
  const itemsLength = Math.ceil(menu.length / ITEMS_PER_PAGE);
  const pages = [];
  for (let i = 1; i <= itemsLength; i++) {
    pages.push(i);
  }
  return (
    <section>
      <div className="pagination">
        <ul className="flex flex-wrap gap-md">
          {pages.map((page, index) => (
            <li
              key={index}
              className={currentPage === page ? "active" : ""}
              onClick={() => handlePageChange(page)}
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
