import { Container, PageTitle } from './NewsPage.styled';
import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';
import NewsList from '../../components/NewsList/NewsList';
import NoticesSearch from '../../ui/NoticesSearch/NoticesSearch';

function NewsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');
  0;

  const resetPage = useCallback(() => {
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  const handleSubmit = ({ query }) => {
    searchParams.set('query', query);
    setSearchParams(searchParams);
    resetPage();
  };

  const handleClear = () => {
    searchParams.delete('query', query);
    setSearchParams(searchParams);
    resetPage();
  };

  return (
    <Container>
      <PageTitle>News</PageTitle>
      <NoticesSearch onSubmit={handleSubmit} onClear={handleClear} />
      <NewsList />
    </Container>
  );
}

export default NewsPage;
