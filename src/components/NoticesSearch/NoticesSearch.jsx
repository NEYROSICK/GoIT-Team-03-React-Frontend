import { useState } from "react";
import { Input, SearchCleanIcon, SearchForm, SearchSubmitIcon } from "./NoticesSearch.styled";

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
                // {...query && (style={rigth: "47px"})}
                // style = {query && {rigth: "47px"} }
            >
            </SearchSubmitIcon>
            {query && (
                <SearchCleanIcon type="button" onClick={handleClear} aria-label="clear">
                   
                </SearchCleanIcon>
            )}
        </SearchForm>
    );
};

export default NoticesSearch;