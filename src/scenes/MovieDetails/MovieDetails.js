import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchMovieById } from './../../api';
import { setOneMovie, setIsLoading, setIsError } from './../../redux/reducers';
import SimilarMovies from './subcomponents/SimilarMovies';

const MovieDetailsWrapper = styled.section`
    grid-area: content;
    display: flex;
    flex-direction: column;
`;

const Poster = styled.img`
    align-self: center;
    margin-bottom: 40px;
`;

const H2 = styled.h2`
    margin-bottom: 16px;
`;

const Synopsis = styled.p`
    margin-bottom: 80px;
`;

const MovieDetail = ({ movies: { movie } , setOneMovie, setIsLoading, setIsError }) => {
    const { movieId } = useParams();
    const imagePrefix = 'http://image.tmdb.org/t/p/w342';

    useEffect(() => {
        (async () => {
            setIsLoading();
            try {
                const [movie, similarMovies] = await fetchMovieById(movieId);
                setOneMovie({
                    ...movie.data,
                    similarMovies: similarMovies.data.results,
                });
            }
            catch (err) {
                console.error(`Error: ${err}`);
            }
        })();
    }, [movieId, setOneMovie, setIsLoading, setIsError]);

    return (
        <MovieDetailsWrapper>
            <Poster src={`${imagePrefix}${movie.poster_path}`} alt="poster"/>
            <H2>{movie.original_title}</H2>
            <Synopsis>{movie.overview || 'No synopsis available'}</Synopsis>
            <SimilarMovies similarMovies={movie.similarMovies} />
        </MovieDetailsWrapper>
    );
}

const mapStateToProps = ({ movies }) => ({ movies });

const mapDispatchToProps = dispatch => ({
    setOneMovie: movie => dispatch(setOneMovie(movie)),
    setIsLoading: () => dispatch(setIsLoading()),
    setIsError: () => dispatch(setIsError()),
});
 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieDetail);
