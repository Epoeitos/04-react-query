import axios from "axios";
import { type Movie } from "../types/movie.ts";

interface MovArr {
  results: Movie[];
  page: number;
  total_pages: number;
}

export default async function fetchMovies(query: string, page: number): Promise<MovArr> {
  // Додаємо <MovArr> сюди 👇
  const response = await axios.get<MovArr>(
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

  // Тут axios вже знає, що response.data — це MovArr, тому "as" не потрібен
  return response.data;
}