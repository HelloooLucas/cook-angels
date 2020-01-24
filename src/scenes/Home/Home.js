import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setIsLoading, setIsError, setHomeMovies, setQuery } from './../../redux/reducers';
import { fetchLatestMovies, fetchMoviesByQuery } from './../../api';
import { Title, MoviesGridContainer } from './subcomponents';

const HomeWrapper = styled.section`
    grid-area: content;
`;

const Home = ({ movies: { isLoading, isError, moviesList, query }, setIsLoading, setIsError, setHomeMovies, setQuery }) => {

    useEffect(() => {
        (async () => {
            setIsLoading();
            const response = query
                ? await fetchMoviesByQuery(query)
                : await fetchLatestMovies();
            try {
                setHomeMovies(response.results);
            }
            catch (err) {
                console.error(err);
            }
        })();
    }, [query, setIsLoading, setIsError, setHomeMovies]);

    return (
        <HomeWrapper>
            <Title query={query} setQuery={setQuery} />
            <MoviesGridContainer
                isLoading={isLoading}
                isError={isError}
                moviesList={moviesList}
            />
        </HomeWrapper>
    );
}

const mapStateToProps = ({ movies }) => ({ movies });

const mapDispatchToProps = dispatch => ({
    setQuery: query => dispatch(setQuery(query)),
    setIsLoading: () => dispatch(setIsLoading()),
    setIsError: () => dispatch(setIsError()),
    setHomeMovies: movies => dispatch(setHomeMovies(movies)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
