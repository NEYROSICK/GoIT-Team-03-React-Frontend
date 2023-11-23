import {
  DropContainer,
  DropDown,
  FilterBtn,
  FilterButton,
  FilterForm,
  FilterHeader,
  FilterMenu,
  FilterText,
  FormInput,
  FormLabel,
  StyledChevronDownIcon,
  StyledFilterIcon,
} from './NoticesFilter.styled';
import { useState } from 'react';

const NoticesFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ageOpen, setAgeOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);

  const handleBtnClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleAgeClick = () => {
    setAgeOpen((prevState) => !prevState);
  };

  const handleGenderClick = () => {
    setGenderOpen((prevState) => !prevState);
  };

  const handleCheckboxChange = (e) => {
    onFilter(e.target);
  };

  return (
    <div>
      <FilterButton type="button" onClick={handleBtnClick}>
        <FilterText>Filter</FilterText>
        <StyledFilterIcon />
      </FilterButton>

      {isOpen && (
        <DropContainer active={true}>
          <DropDown>
            <FilterHeader>Filters</FilterHeader>
            <FilterMenu active={ageOpen && true}>
              <FilterBtn
                type="button"
                onClick={handleAgeClick}
                aria-label="toggle age options"
                
              >
                <StyledChevronDownIcon active={ageOpen && true} />
                By age
              </FilterBtn>
              {ageOpen && (
                <FilterForm>
                  <FormLabel>
                    <input
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="age"
                      value="0-12 m"
                    />
                    up to 1 year
                  </FormLabel>
                  <FormLabel>
                    <input
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="age"
                      value="1 year"
                    />
                    up to 2 years
                  </FormLabel>
                  <FormLabel>
                    <input
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="age"
                      value="2 years +"
                    />
                    from 2 years
                  </FormLabel>
                </FilterForm>
              )}
            </FilterMenu>
            <FilterMenu active={genderOpen && true}>
              <FilterBtn
                type="button"
                onClick={handleGenderClick}
                aria-label="toggle gender options"
              >
                <StyledChevronDownIcon active={genderOpen && true}/>
                By gender
              </FilterBtn>
              {genderOpen && (
                <FilterForm>
                  <FormLabel>
                    <FormInput
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="gender"
                      value="male"
                    />
                    male
                  </FormLabel>
                  <FormLabel>
                    <FormInput
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="gender"
                      value="female"
                    />
                    female
                  </FormLabel>
                </FilterForm>
              )}
            </FilterMenu>
          </DropDown>
        </DropContainer>
      )}
    </div>
  );
};

export default NoticesFilter;
