import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { setQuery } from './../redux/reducers';

const NavWrapper = styled.nav`
    font-size: calc(1rem + 1vw);
    grid-area: nav;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LogoButton = styled.button`
    font-size: 1em;
    font-size: inherit;
    line-height: 1.4em;
    font-weight: bold;
    cursor: pointer;
`;

const SearchWrapper = styled.div`
    display: flex;
`;

const SearchInput = styled.input`
    font-size: 0.6em;
    border: 1px solid black;
    margin-right: 0.5em;
`;

const Button = styled.button`
    font-size: 0.6em;
    margin-right: 0.5em;
    cursor: pointer;
`;

const Nav = ({ setQuery, history }) => {
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        setQuery(inputValue);
        setInputValue('');
    }

    const resetFilms = () => {
        setInputValue('');
        setQuery('');
    };

    return (
        <NavWrapper>
            <LogoButton onClick={() => {
                history.push('/');
                resetFilms();
            }}>
                Movie Angels
            </LogoButton>
            <SearchWrapper>
                <form>
                    <SearchInput
                        type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                    <Button
                        onClick={e => {
                            e.preventDefault();
                            handleClick();
                        }}
                        type='submit'
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </form>
            </SearchWrapper>
        </NavWrapper>
    );
}

const mapDispatchToProps = dispatch => ({
    setQuery: query => dispatch(setQuery(query)),
});

export default withRouter(
    connect(
        null,
        mapDispatchToProps,
)(Nav));