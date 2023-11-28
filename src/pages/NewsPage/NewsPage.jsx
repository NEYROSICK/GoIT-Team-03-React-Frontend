import { Container, PageTitle } from './NewsPage.styled';
import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';
import NewsList from '../../components/NewsList/NewsList';
import NoticesSearch from '../../ui/NoticesSearch/NoticesSearch';

function NewsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    Object.fromEntries(searchParams).query || '',
  );
  const [searchValue, setSearchValue] = useState({});

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

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

  useEffect(() => {
    setSearchParams({
      ...searchValue,
    });
  }, [
    params,
    setSearchParams,
    searchValue,
    searchParams
  ]);


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
