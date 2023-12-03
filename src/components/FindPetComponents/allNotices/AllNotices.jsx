import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  useGetNoticesQuery,
  useGetMeAndPetsQuery,
} from '../../../redux/API/RTKQueryApi.js';
import { selectIsAuthenticated } from '../../../redux/auth/selectors.jsx';
import Loader from '../../../ui/Loader/Loader.jsx';
import NoMatchesFound from '../../../ui/NoMatches/NoMatchesFound.jsx';
import NoticeItem from '../NoticeItem/NoticeItem';
import { NoticeList } from '../../../ui/NoticeList/noticeList.styled';
import { StyledPagination } from '../../../ui/pagination/StyledPagination.styled.jsx';

function AllNotices() {
  const { pathname } = useLocation();
  const category = pathname.split('/')[2];
  const [searchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setLimit(11);
      } else if (width <= 1024) {
        setLimit(10);
      } else {
        setLimit(12);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { data, error, isLoading } = useGetNoticesQuery({
    category,
    params: {
      page: currentPage,
      limit,
      ...searchParamsObject,
    },
  });

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { data: userData } = useGetMeAndPetsQuery(undefined, {
    skip: !isAuthenticated,
  });

  const userFavorites = (isAuthenticated && userData?.user?.favoritesArr) || [];

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {!isLoading ? (
        <>
          <NoticeList>
            {data.notices.length > 0 ? (
              data.notices.map(({ _id, ...notice }) => (
                <NoticeItem
                  key={_id}
                  id={_id}
                  {...notice}
                  userFavoritesArr={userFavorites}
                />
              ))
            ) : (
              <NoMatchesFound />
            )}
          </NoticeList>

          <StyledPagination
            count={Math.ceil(data.totalCount / limit)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </>
      ) : (<Loader />)}
      {error && error.message}
    </>
  );
}

export default AllNotices;
