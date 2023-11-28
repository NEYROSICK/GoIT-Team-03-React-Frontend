import { useSearchParams } from 'react-router-dom';
import {
  useGetMyNoticesQuery,
  useGetMeAndPetsQuery,
} from '../../../redux/API/RTKQueryApi';
import { NoticeList } from '../../../ui/NoticeList/noticeList.styled';
import NoticeItem from '../NoticeItem/NoticeItem';
import { selectIsAuthenticated } from '../../../redux/auth/selectors.jsx';
import { useSelector } from 'react-redux';
import { StyledPagination } from '../../../ui/pagination/StyledPagination.styled.jsx'; // Update the path to your StyledPagination component
import { useEffect, useState } from 'react';

function MyAds() {
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

  const { data, error, isLoading } = useGetMyNoticesQuery({
    params: {
      page: currentPage,
      limit,
      ...searchParamsObject,
    },
  });

  let userFavorites = [];
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { data: userData } = useGetMeAndPetsQuery(undefined, {
    skip: !isAuthenticated,
  });

  if (isAuthenticated && userData && userData.user) {
    userFavorites = userData.user.favoritesArr;
  }

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <>
          <NoticeList>
            {data.notices.length > 0 ? (
              data.notices.map(
                ({ _id, title, category, date, sex, location, avatarURL }) => (
                  <NoticeItem
                    key={_id}
                    id={_id}
                    title={title}
                    category={category}
                    date={date}
                    sex={sex}
                    location={location}
                    avatarUrl={avatarURL}
                    userFavoritesArr={userFavorites}
                    showDelete={true}
                  />
                ),
              )
            ) : (
              <div>No Notices found</div>
            )}
          </NoticeList>
          {data.notices.length !== 0 && (
            <StyledPagination
              count={Math.floor(data.totalCount / limit)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          )}
        </>
      )}
      {error && error.message}
    </>
  );
}

export default MyAds;
