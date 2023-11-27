import NewsItem from '../NewsItem/NewsItem';
import { List } from './NewsList.styled';
import { useGetNewsQuery } from '../../redux/API/RTKQueryApi';
import { useSearchParams } from 'react-router-dom';

function NewsList() {
  const [searchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const { data, error, isLoading } = useGetNewsQuery({
    params: {
      page: 1,
      limit: 12,
      ...searchParamsObject,
    },
  });
  return (
    <List>
      {isLoading && <div>Loading...</div>}
      {data ? (
        data.map(({ _id, imgUrl, title, text, date, url, id }) => (
          <NewsItem
            key={_id}
            id={id}
            image={imgUrl}
            title={title}
            description={text}
            date={date}
            url={url}
          />
        ))
      ) : (
        <div>No News Found</div>
      )}
      {error && <div>{error.message}</div>}
    </List>
  );
}

export default NewsList;
