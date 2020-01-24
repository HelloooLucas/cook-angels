import { combineReducers } from 'redux';

import movies, {
    MovieActionTypes,
    setIsLoading,
    setQuery,
    setHomeMovies,
    setOneMovie,
    setIsError,
} from './movies';

export {
    MovieActionTypes,
    setIsLoading,
    setQuery,
    setHomeMovies,
    setOneMovie,
    setIsError,
}

export default combineReducers({
    movies,
});
