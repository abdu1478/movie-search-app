import { useState, useCallback } from "react";
import axios from "axios";

export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Type: string;
};

export const useMovieSearch = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;


  const fetchMovies = useCallback(async (query: string) => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await axios(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      console.log("Response", res);
      if (res.data.Response === "False") throw new Error(res.data.Error);
      setMovies(res.data.Search || []);
    } catch (err: any) {
      setError(err.message || "Failed to fetch");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { movies, loading, error, fetchMovies };
};
