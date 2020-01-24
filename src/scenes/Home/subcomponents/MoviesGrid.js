import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Grid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 550px;
    gap: 20px;

    @media (min-width: 769px) {
        grid-auto-rows: 450px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const MovieBlock = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 8fr 1fr;
`;

const PosterContainer = styled.div`
    position: relative;
    grid-row: 1;
    overflow: hidden;
    margin-bottom: 16px;
`;

const PosterImage = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Title = styled.h3`
    grid-row: 2;
    font-weight: bold;
`;

const MoviesGrid = ({ moviesList }) => {
    const imagePrefix = 'http://image.tmdb.org/t/p/w342';
    const placeholderImg = 'https://straffordchiropractic.com/wp-content/uploads/2017/04/poster-placeholder-203x300.png';
    const imgSrc = path => path ? `${imagePrefix}${path}` : placeholderImg;
    
    return (
        <Grid>
            {moviesList.map(movie =>
                <MovieBlock key={movie.id}>
                    <PosterContainer>
                        <PosterImage src={imgSrc(movie.poster_path)} alt="movie-poster"/>
                    </PosterContainer>
                    <StyledLink to={`/movie/${movie.id}`}>
                            <Title>{movie.original_title}</Title>
                    </StyledLink>
                </MovieBlock>
            )}
        </Grid>
    );
}
 
export default MoviesGrid;
