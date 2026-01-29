import axios from "axios";
import { type Movie } from "../types/movie.ts";

interface MovArr {
  results: Movie[];
  page: number;
  total_pages: number;
}

export default async function fetchMovies(query: string, page: number): Promise<MovArr> {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query,
        include_adult: false,
        language: "en-US",
        page,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    }
  );
  return response.data as MovArr;
}