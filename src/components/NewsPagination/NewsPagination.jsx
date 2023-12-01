function Pagination({
  currentPage,
  articlesPerPage,
  totalArticles,
  onPageChange,
}) {
  // Calculate the total number of pages
  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  // Create an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul>
      {pageNumbers.map((number) => (
        <li
          key={number}
          onClick={() => onPageChange(number)}
          style={{
            cursor: 'pointer',
            fontWeight: currentPage === number && 'bold',
          }}
        >
          {number}
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
