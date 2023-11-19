import NoticesSearch from "../../components/NoticesSearch/NoticesSearch"
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { Container, PageTitle } from "../NoticesPage/NoticesPage.styled";

const NoticesPage = () => {

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
            <PageTitle>Find your favourite pet</PageTitle>
            <div>
                <NoticesSearch onSubmit={handleSubmit} onClear={handleClear}/>
            </div>
        </Container>
    )
}

export default NoticesPage