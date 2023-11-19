import { FilterButton, FilterText, StyledFilterIcon } from "./NoticesFilter.styled";

const NoticesFilter = () => {
  return (
    <div>
      <FilterButton type="button">
        <FilterText>Filter</FilterText>
        <StyledFilterIcon/>
      </FilterButton>
    </div>
  );
}

export default NoticesFilter;