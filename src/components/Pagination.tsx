import { useRecipes } from "../context/useRecipes";

type pageProps = {
  itemsLength: number;
};

const Pagination = ({ itemsLength }: pageProps) => {
  const { currentPage, handlePageChange } = useRecipes();
  const pages = [];
  for (let i = 1; i <= itemsLength; i++) {
    pages.push(i);
  }
  return (
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
  );
};
export default Pagination;
