import NoticesSearch from '../../ui/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from './NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilter from './NoticesFilter/NoticesFilter';
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import {
  FilterAndAddContainer,
  FilterContainer,
  NoticesContainer,
  PageTitle,
} from './NoticesPage.styled';
import AddPetButton from '../../ui/AddPetButton/AddPetButton';
import { AllFilterQueries } from '../../helpers/filtersQueries';
import { Container } from '../Layout/Container/Container';
import MyAds from './myAds/MyAds';
const initialFiltersValue = {
  to1: false,
  to2: false,
  from2: false,
  female: false,
  male: false,
};

const MyAdsComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [checkboxValue, setCheckboxValue] = useState(initialFiltersValue);
  const [searchValue, setSearchValue] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
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
    if (location.pathname === '/notices') navigate('/notices/sell');
  }, []);

  const handleSearchSubmit = (query) => {
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
              <AddPetButton state={{ from: location }} />
            </FilterAndAddContainer>
          </div>
        </FilterContainer>
        <MyAds />
      </NoticesContainer>
    </Container>
  );
};

export default MyAdsComponent;
