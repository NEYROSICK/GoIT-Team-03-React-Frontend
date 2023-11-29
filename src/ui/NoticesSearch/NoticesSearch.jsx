import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Input,
  SearchCleanIcon,
  SearchForm,
  SearchSubmitIcon,
} from './NoticesSearch.styled';
import sprite from '../../ui/Icons/sprite.svg';

const NoticesSearch = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    Object.fromEntries(searchParams).query || '',
  );

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSubmit('');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="searchQuery"
        required
        value={searchQuery}
        onChange={(e) => handleChange(e)}
        placeholder="Search"
      />

      <SearchSubmitIcon
        type="submit"
        aria-label="submit"
        active={searchQuery && true}
        onClick={handleSubmit}
      >
        <use href={sprite + '#iconSearch'}></use>
      </SearchSubmitIcon>
      {searchQuery && (
        <SearchCleanIcon type="button" onClick={handleClear} aria-label="clear">
          <use href={sprite + '#iconCross'}></use>
        </SearchCleanIcon>
      )}
    </SearchForm>
  );
};

export default NoticesSearch;
