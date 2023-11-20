import PropTypes from "prop-types";
import { useState } from "react";
import searchIcon from "../../images/search.svg";
import crossSmallIcon from "../../images/cross-small.svg";
import {
  SearchForm,
  SearchFormInput,
  SearchButton,
  ButtonIcon,
  DeleteButton,
  DeleteIcon,
} from "../Search/Search.styled";

export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue.trim());
  };

  const handleDelete = () => {
    setInputValue("");
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
        value={inputValue}
        onChange={handleInput}
      />
      <SearchButton type="submit" aria-label="search button">
        <ButtonIcon>
          <img src={searchIcon} alt="search" />
        </ButtonIcon>
      </SearchButton>
      {inputValue.trim() !== "" && (
        <DeleteButton
          type="button"
          aria-label="delete button"
          onClick={handleDelete}
        >
          <DeleteIcon>
            <img src={crossSmallIcon} alt="delete" />
          </DeleteIcon>
        </DeleteButton>
      )}
    </SearchForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
