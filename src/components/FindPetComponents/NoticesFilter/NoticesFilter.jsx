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
  StyledCheckbocCheckedIcon,
  StyledCheckboxIcon,
  StyledChevronDownIcon,
  StyledFilterIcon,
} from './NoticesFilter.styled';
import { useState } from 'react';
import sprite from '../../../ui/Icons/sprite.svg';
import { AllFilterQueries } from '../../../helpers/filtersQueries';

const NoticesFilter = ({ checkboxValue, setCheckboxValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ageOpen, setAgeOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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
    const { name } = e.target;
    setCheckboxValue((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));

    setIsChecked((prevState) => !prevState);
    
  };

  return (
    <div>
      <FilterButton type="button" onClick={handleBtnClick}>
        <FilterText>Filter</FilterText>
        <StyledFilterIcon>
          <use href={sprite + '#iconFilters3'}></use>
        </StyledFilterIcon>
      </FilterButton>

      {isOpen && (
        <DropContainer active={true}>
          <DropDown>
            <FilterHeader>Filters</FilterHeader>
            <FilterMenu active={ageOpen ? true : undefined}>
              <FilterBtn
                type="button"
                onClick={handleAgeClick}
                aria-label="toggle age options"
              >
                <StyledChevronDownIcon active={ageOpen ? true : undefined}>
                  <use href={sprite + '#iconChevronDown'}></use>
                </StyledChevronDownIcon>
                By age
              </FilterBtn>
              {ageOpen && (
                <FilterForm>
                  <FormLabel>
                    <StyledCheckboxIcon check={checkboxValue.to1}>
                      <use href={sprite + '#iconRound'}></use>
                    </StyledCheckboxIcon>
                    <StyledCheckbocCheckedIcon check={checkboxValue.to1}>
                      <use href={sprite + '#iconCheckRound'}></use>
                    </StyledCheckbocCheckedIcon>
                    <FormInput
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="to1"
                      checked={checkboxValue.to1}
                    />
                    up to 1 year
                  </FormLabel>
                  <FormLabel>
                    <StyledCheckboxIcon check={checkboxValue.to2}>
                      <use href={sprite + '#iconRound'}></use>
                    </StyledCheckboxIcon>
                    <StyledCheckbocCheckedIcon check={checkboxValue.to2}>
                      <use href={sprite + '#iconCheckRound'}></use>
                    </StyledCheckbocCheckedIcon>
                    <FormInput
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="to2"
                      checked={[checkboxValue.to2, isChecked]}
                    />
                    up to 2 years
                  </FormLabel>
                  <FormLabel>
                    <StyledCheckboxIcon check={checkboxValue.from2}>
                      <use href={sprite + '#iconRound'}></use>
                    </StyledCheckboxIcon>
                    <StyledCheckbocCheckedIcon check={checkboxValue.from2}>
                      <use href={sprite + '#iconCheckRound'}></use>
                    </StyledCheckbocCheckedIcon>
                    <FormInput
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="from2"
                      checked={[checkboxValue.from2, isChecked]}
                    />
                    from 2 years
                  </FormLabel>
                </FilterForm>
              )}
            </FilterMenu>
            <FilterMenu active={genderOpen ? true : undefined}>
              <FilterBtn
                type="button"
                onClick={handleGenderClick}
                aria-label="toggle gender options"
              >
                <StyledChevronDownIcon active={genderOpen ? true : undefined}>
                  <use href={sprite + '#iconChevronDown'}></use>
                </StyledChevronDownIcon>
                By gender
              </FilterBtn>
              {genderOpen && (
                <FilterForm>
                  <FormLabel>
                    <StyledCheckboxIcon check={checkboxValue.male}>
                      <use href={sprite + '#iconRound'}></use>
                    </StyledCheckboxIcon>
                    <StyledCheckbocCheckedIcon check={checkboxValue.male}>
                      <use href={sprite + '#iconCheckRound'}></use>
                    </StyledCheckbocCheckedIcon>
                    <FormInput
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="male"
                      checked={checkboxValue.male}
                    />
                    male
                  </FormLabel>
                  <FormLabel>
                    <StyledCheckboxIcon check={checkboxValue.female}>
                      <use href={sprite + '#iconRound'}></use>
                    </StyledCheckboxIcon>
                    <StyledCheckbocCheckedIcon check={checkboxValue.female}>
                      <use href={sprite + '#iconCheckRound'}></use>
                    </StyledCheckbocCheckedIcon>
                    <FormInput
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      name="female"
                      checked={checkboxValue.female}
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
