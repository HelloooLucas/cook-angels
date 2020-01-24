import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    margin-bottom: 80px;
`;
const H2 = styled.h2`
    margin-bottom: 16px;
`;

const Grid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
    grid-auto-rows: 320px;
    gap: 20px;
`;

const MovieBlock = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 270px 1fr;
`;

const PosterContainer = styled.div`
    position: relative;
    grid-row: 1;
    overflow: hidden;
    margin-bottom: 8px;
`;

const PosterImage = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Title = styled.h3`
    grid-row: 2;
    font-weight: bold;
`;

const SimilarMovies = ({ similarMovies }) => {
    const imagePrefix = 'http://image.tmdb.org/t/p/w342';
    const placeholderImg = 'https://straffordchiropractic.com/wp-content/uploads/2017/04/poster-placeholder-203x300.png';
    const imgSrc = path => path ? `${imagePrefix}${path}` : placeholderImg;
    console.log(similarMovies)

    return (
        <Wrapper>
            <H2>Similar movies</H2>
                {similarMovies && similarMovies.length
                    ? <Grid>
                            {similarMovies.map(similar =>
                                <StyledLink to={`/movie/${similar.id}`}>
                                    <MovieBlock key={similar.id}>
                                        <PosterContainer>
                                            <PosterImage src={imgSrc(similar.poster_path)} alt="movie-poster"/>
                                        </PosterContainer>
                                            <Title>{similar.original_title}</Title>
                                    </MovieBlock>
                                </StyledLink>
                            )}
                    </Grid>
                    : 'No similar movies found'
                }
        </Wrapper>
    );
}
 
export default SimilarMovies;
