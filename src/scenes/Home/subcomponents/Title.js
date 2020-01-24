import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const H2 = styled.h2`
    margin-bottom: 48px;
    font-weight: bold;
`;

const Button = styled.button`
    font-size: 1em;
    cursor: pointer;
    margin-left: 10px;
`;

const Title = ({ query, setQuery }) => {
    const resetFilms = () => setQuery('');

    const message = query ? `Movies that match '${query}'` : 'All the latest movies';
    const resetButton = query
        ? <Button onClick={resetFilms}>
            <FontAwesomeIcon icon={faTimesCircle} />
        </Button>
        : '';
    return <H2>{message}{resetButton}</H2>
};

export default (Title);
