import NoticesSearch from '../../components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilter from '../../components/NoticesFilter/NoticesFilter';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import {
  Container,
  FilterAndAddContainer,
  FilterContainer,
  PageTitle,
} from '../NoticesPage/NoticesPage.styled';
import AddPetButton from '../../components/AddPetButton/AddPetButton';
// import {
//   useGetNoticesQuery,
//   useGetOneNoticeQuery,
//   useGetMyNoticesQuery,
// } from '../../redux/API/noticesApi';
const NoticesPage = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  // refactor the use of the RTK query lower for the cases of the filters in component

  // const {
  //   data: allNotices,
  //   error: allNoticesError,
  //   isLoading: loadAllNotices,
  // } = useGetNoticesQuery({
  //   params: { searchParams },
  // });
  // const {
  //   data: myNotices,
  //   error: myNoticesError,
  //   isLoading: loadMyNotices,
  // } = useGetMyNoticesQuery({
  //   params: { searchParams },
  // });
  // const {
  //   data: oneNotice,
  //   error: oneNoticeError,
  //   isLoading: loadOneNotice,
  // } = useGetOneNoticeQuery({
  //   id: {id},
  //   params: { searchParams },
  // });


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
    </Container>
  );
};

export default NoticesPage;
