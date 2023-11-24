import NewsItem from '../NewsItem/NewsItem';
import { List } from './NewsList.styled';

function NewsList() {
  return (
    <List>
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </List>
  );
}

export default NewsList;
