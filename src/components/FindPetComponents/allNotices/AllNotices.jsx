import {
  NoNoticesFound,
  NoNoticesFoundIcon,
} from '../../../ui/NoMatches/AllNotices.styled.js';
import sprite from '../../../ui/Icons/sprite.svg';
import Loader from '../../../ui/Loader/Loader.jsx';

import {
  useGetNoticesQuery,
  useGetMeAndPetsQuery,
} from '../../../redux/API/RTKQueryApi.js';
import { selectIsAuthenticated } from '../../../redux/auth/selectors.jsx';
import NoticeItem from '../NoticeItem/NoticeItem';
import { NoticeList } from '../../../ui/NoticeList/noticeList.styled';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledPagination } from '../../../ui/pagination/StyledPagination.styled.jsx';
import { useEffect, useState } from 'react';

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
    refetchOnMountOrArgChange: true,
  });

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { data: userData } = useGetMeAndPetsQuery(undefined, {
    skip: !isAuthenticated,
  });

  let userFavorites = [];

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

          <StyledPagination
            count={Math.ceil(data.totalCount / limit)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </>
      )}
      {error && error.message}
    </>
  );
}

export default AllNotices;
