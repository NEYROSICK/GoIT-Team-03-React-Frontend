import { useState } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import {
  List,
  Pagination,
  PageButton,
  ArrowButton,
} from './NewsList.styled.jsx';
import allArticles from '../../pages/NewsPage/allArticles.json';

function NewsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const pageRange = 2;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allArticles.slice(indexOfFirstItem, indexOfLastItem);

  const totalItems = allArticles.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    let startPage, endPage;

    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= pageRange + 1) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage >= totalPages - pageRange) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - pageRange;
        endPage = currentPage + pageRange;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <List>
        {currentItems.map((news) => (
          <NewsItem
            key={news.id}
            image={news.imgUrl}
            title={news.title}
            description={news.text}
            details={news.date}
          />
        ))}
      </List>

      <Pagination>
        <ArrowButton disabled={currentPage === 1} onClick={goToPreviousPage}>
          &lt;
        </ArrowButton>
        {getPageNumbers().map((pageNumber) => (
          <PageButton
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            active={currentPage === pageNumber}
          >
            {pageNumber}
          </PageButton>
        ))}
        <ArrowButton
          disabled={currentPage === totalPages}
          onClick={goToNextPage}
        >
          &gt;
        </ArrowButton>
      </Pagination>
    </>
  );
}

export default NewsList;
