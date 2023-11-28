import {
  NoNoticesFound,
  NoNoticesFoundIcon,
} from '../../../ui/NoMatches/AllNotices.styled.js';
import sprite from '../../../ui/Icons/sprite.svg';
import Loader from '../../../ui/Loader/Loader.jsx';

import { useSearchParams } from 'react-router-dom';
import {
  useGetMyFavoriteQuery,
  useGetMeAndPetsQuery,
} from '../../../redux/API/RTKQueryApi.js';
import { NoticeList } from '../../../ui/NoticeList/noticeList.styled';
import NoticeItem from '../NoticeItem/NoticeItem';
import { selectIsAuthenticated } from '../../../redux/auth/selectors.jsx';
import { useSelector } from 'react-redux';
import { StyledPagination } from '../../../ui/pagination/StyledPagination.styled.jsx'; // Update the path to your StyledPagination component
import { useEffect, useState } from 'react';

function FavoriteNotices() {
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

  const { data, error, isLoading } = useGetMyFavoriteQuery({
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
      {isLoading && <Loader />}
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
                  />
                ),
              )
            ) : (
              <NoNoticesFound>
                <NoNoticesFoundIcon>
                  <use href={sprite + '#iconPaw'} />
                </NoNoticesFoundIcon>{' '}
                No Notices found{' '}
                <NoNoticesFoundIcon>
                  <use href={sprite + '#iconPaw'} />
                </NoNoticesFoundIcon>
              </NoNoticesFound>
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

export default FavoriteNotices;
