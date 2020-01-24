import React from 'react';
import styled from 'styled-components';

import InfoMessage from './InfoMessage';
import MoviesGrid from './MoviesGrid';

const MoviesGridContainer = ({ isLoading, isError, moviesList }) => {
    return (
        <>
            <InfoMessage
                isLoading={isLoading}
                isError={isError}
                moviesList={moviesList}
            />
            <MoviesGrid moviesList={moviesList} />
        </>
    );
}
 
export default MoviesGridContainer;
