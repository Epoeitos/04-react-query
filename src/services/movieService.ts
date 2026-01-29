import axios from 'axios';
import { type Movie } from '../types/movie.ts';

interface MovArr {
  results: Movie[];
  page: number;
  total_pages: number;
}

export default async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query,
        include_adult: false,
        language: 'en-US',
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    }
  );

  const data: MovArr = response.data; // тут явно типізуємо
  return data.results || [];
}
