import type { Movie } from '../types/movie.ts'


export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}
