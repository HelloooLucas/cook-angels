import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=23dd3feae1b9f310d53f8462d6c1c522';

export const fetchLatestMovies = async () => {
    const response = await axios.get(`${API_URL}/discover/movie${API_KEY}&sort_by=release_date.desc`);
    return response.data;
}

export const fetchMoviesByQuery = async query => {
    const response = await axios.get(`${API_URL}/search/movie${API_KEY}&query=${query}`);
    return response.data;
}

export const fetchMovieById = async movieId => {
    const moviePromise = axios.get(`${API_URL}/movie/${movieId}${API_KEY}`);
    const similarMoviesPromise = axios.get(`${API_URL}/movie/${movieId}/similar${API_KEY}`);

    return await Promise.all([moviePromise, similarMoviesPromise]);
}
