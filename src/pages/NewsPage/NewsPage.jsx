import { Container, PageTitle } from './NewsPage.styled';
import { useSearchParams } from 'react-router-dom';
import { useCallback, useState, useMemo, useEffect } from 'react';
import NewsList from '../../components/NewsList/NewsList';
import NoticesSearch from '../../ui/NoticesSearch/NoticesSearch';

function NewsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState({});

  const query = searchParams.get('query');
  0;

  const resetPage = useCallback(() => {
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  const handleSubmit = query => {
    if (query) {
      setSearchValue({ query });
    } else {
      setSearchValue({});
    }
  };

  const handleClear = () => {
    searchParams.delete('query', query);
    setSearchParams(searchParams);
    resetPage();
  };

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    setSearchParams({
      ...searchValue,
    });
  }, [params, setSearchParams, searchValue, searchParams]);

  return (
    <Container>
      <PageTitle>News</PageTitle>
      <NoticesSearch onSubmit={handleSubmit} onClear={handleClear} />
      <NewsList />
    </Container>
  );
}

export default NewsPage;
