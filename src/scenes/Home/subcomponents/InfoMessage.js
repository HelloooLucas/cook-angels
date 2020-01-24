import React from 'react';

const InfoMessage = ({ isLoading, isError, moviesList }) => {
    const shouldDisplay = isLoading || isError || moviesList.length === 0;
    const message = 
        isLoading
        ? 'Loading...'
        : isError
        ? 'Something went wrong'
        : moviesList.length === 0
        ? 'No movies found...'
        : '';

    return shouldDisplay && <p>{message}</p>;
}

export default InfoMessage;
