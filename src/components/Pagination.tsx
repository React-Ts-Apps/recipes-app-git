type pageProps = {
  itemsLength: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
};

const Pagination = ({
  itemsLength,
  currentPage,
  handlePageChange,
}: pageProps) => {
  const pages = [];
  for (let i = 1; i <= itemsLength; i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      <ul className="flex flex-wrap gap-md">
        {pages.map((page) => (
          <li
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
