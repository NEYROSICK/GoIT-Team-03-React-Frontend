import NoticesSearch from '../../ui/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from '../../components/FindPetComponents/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilter from '../../components/FindPetComponents/NoticesFilter/NoticesFilter';
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useCallback, Suspense, useState, useEffect, useMemo } from 'react';
import {
  FilterAndAddContainer,
  FilterContainer,
  NoticesContainer,
  PageTitle,
} from '../NoticesPage/NoticesPage.styled';
import AddPetButton from '../../ui/AddPetButton/AddPetButton';
import { AllFilterQueries } from '../../helpers/filtersQueries';
import { Container } from '../../components/Layout/Container/Container';
const initialFiltersValue = {
  to1: false,
  to2: false,
  from2: false,
  female: false,
  male: false,
};

const NoticesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [checkboxValue, setCheckboxValue] = useState(initialFiltersValue);
  const [searchValue, setSearchValue] = useState({});

  
  const navigate = useNavigate();
  const location = useLocation();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    setSearchParams({
      ...searchValue,
      ...AllFilterQueries(
        checkboxValue.to1,
        checkboxValue.to2,
        checkboxValue.from2,
        checkboxValue.female,
        checkboxValue.male,
      ),
    });
  }, [checkboxValue, params, setSearchParams, searchValue, searchParams]);

  useEffect(() => {
    navigate("/notices/sell")
  }, [])

  const handleSearchSubmit = query => {
    if (query) {
      setSearchValue({ query });
    } else {
      setSearchValue({});
    }
  };

    
  return (
    <Container>
      <NoticesContainer>
        <PageTitle>Find your favorite pet</PageTitle>
        <div>
          <NoticesSearch onSubmit={handleSearchSubmit} />
        </div>
        <FilterContainer>
          <NoticesCategoriesNav searchParams={searchParams} />
          <div>
            <FilterAndAddContainer>
              <NoticesFilter
                setCheckboxValue={setCheckboxValue}
                checkboxValue={checkboxValue}
              />
              <AddPetButton state= {{from:location}} />
            </FilterAndAddContainer>
          </div>
        </FilterContainer>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </NoticesContainer>
    </Container>
  );
};

export default NoticesPage;
