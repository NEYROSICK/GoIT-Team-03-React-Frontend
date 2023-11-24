import { useState } from "react";
import { Input, SearchCleanIcon, SearchForm, SearchSubmitIcon } from "./NoticesSearch.styled";
import sprite from '../../ui/Icons/sprite.svg';
const initialState = {
    query: '',
};

const NoticesSearch = ({ onSubmit, onClear }) => {
    const [state, setState] = useState({ ...initialState });

    const handleChange = e => {
        const { name, value } = e.target;

        if (!value) {
            handleClear();
            return;
        }

        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleClear = () => {
        setState({ ...initialState });

        onClear({ ...initialState });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (state.query.trim() === '') {
            setState({ ...initialState });
            return;
        }

        onSubmit({ ...state });
    };

    const { query } = state;

    return (
        <SearchForm onSubmit={handleSubmit}>
            <Input
                type="text"
                name="query"
                required
                value={query}
                onChange={handleChange}
                placeholder="Search"
            />

            <SearchSubmitIcon
                type="submit"
                aria-label="submit"
                active={query && true}
            >   <use href={sprite + '#iconSearch'}></use>
            </SearchSubmitIcon>
            {query && (
                <SearchCleanIcon type="button" onClick={handleClear} aria-label="clear">
                   <use href={sprite + '#iconCross'}></use>
                </SearchCleanIcon>
            )}
        </SearchForm>
    );
};

export default NoticesSearch;