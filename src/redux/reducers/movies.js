const INIT_FETCH = 'movies/INIT_FETCH';
const SET_QUERY = 'movies/SET_QUERY';
const SET_MANY = 'movies/SET_MANY';
const SET_ONE = 'movies/SET_ONE';
const ERROR = 'movies/ERROR';

export const MovieActionTypes = {
    INIT_FETCH,
    SET_MANY,
    SET_ONE,
    ERROR,
}

export const setIsLoading = () => ({
    type: INIT_FETCH,
});

export const setQuery = query => ({
    type: SET_QUERY,
    payload: query,
});

export const setHomeMovies = moviesList => ({
    type: SET_MANY,
    payload: moviesList,
});

export const setOneMovie = movie => ({
    type: SET_ONE,
    payload: movie,
});

export const setIsError = () => ({
    type: ERROR,
});

export const movieInitialState = {
    query: '',
    isLoading: false,
    isError: false,
    moviesList: [],
    movie: {},
}

const movies = (state = movieInitialState, action) => {
    switch(action.type) {
        case INIT_FETCH:
            return {
                ...state,
                isLoading: true,
                moviesList: [],
                movie: {},
            }
        case SET_QUERY:
            return {
                ...state,
                query: action.payload,
            }
        case SET_MANY:
            return {
                ...state,
                isLoading: false,
                moviesList: action.payload,
            }
        case SET_ONE:
            return {
                ...state,
                isLoading: false,
                movie: action.payload,
            }
        case ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        default:
            return state;
    }
};

export default movies;
