import { useSearchParams } from 'react-router-dom';
import { useGetMyFavoriteQuery } from '../../../redux/API/noticesApi';
import { NoticeList } from '../../../ui/NoticeList/noticeList.styled';
import NoticeItem from '../NoticeItem/NoticeItem';

function FavoriteNotices() {
  const [searchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const { data, error, isLoading } = useGetMyFavoriteQuery({
    params: {
      page: 1,
      limit: 12,
      ...searchParamsObject,
    },
  });

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <NoticeList>
          {data.length > 0 ? (
            data.map(
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
                />
              ),
            )
          ) : (
            <div>No Notices found</div>
          )}
        </NoticeList>
      )}
      {error && error.message}
    </>
  );
}

export default FavoriteNotices;
