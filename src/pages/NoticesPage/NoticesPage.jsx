import NoticesSearch from '../../ui/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from '../../components/FindPetComponents/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilter from '../../components/FindPetComponents/NoticesFilter/NoticesFilter';
import { Outlet, NavLink } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState, useCallback, Suspense } from 'react';
import {
  Container,
  FilterAndAddContainer,
  FilterContainer,
  PageTitle,
} from '../NoticesPage/NoticesPage.styled';
import AddPetButton from '../../ui/AddPetButton/AddPetButton';

import NoticeItem from '../../components/FindPetComponents/NoticeItem/NoticeItem';

const NoticesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

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

  const resetPage = useCallback(() => {
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <Container>
      <PageTitle>Find your favorite pet</PageTitle>
      <div>
        <NoticesSearch onSubmit={handleSubmit} onClear={handleClear} />
      </div>
      <FilterContainer>
        <NoticesCategoriesNav searchParams={searchParams} />
        <div>
          <FilterAndAddContainer>
            <NoticesFilter />
            <AddPetButton />
          </FilterAndAddContainer>
        </div>
      </FilterContainer>
      <NoticeItem />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet searchParams={searchParams} />
      </Suspense>
    </Container>
  );
};

export default NoticesPage;
