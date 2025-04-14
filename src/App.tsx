import { useState } from "react";
import { useMovieSearch, Movie } from "./hooks/useMovieSearch";
import SearchBar from "./components/SearchBar.tsx";
import MovieList from "./components/MovieList.tsx";
import SelectedMovies from "./components/selectedMovies.tsx";
import { Analytics } from '@vercel/analytics/react';

function App() {
  const { movies, loading, error, fetchMovies } = useMovieSearch();
  const [selectedMovies, setSelectedMovies] = useState<Record<string, Movie>>({});

  const addMovie = (movie: Movie) => {
    setSelectedMovies((prev) => ({ ...prev, [movie.imdbID]: movie }));
  };

  const removeMovie = (id: string) => {
    setSelectedMovies((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen overflow-hidden">
      <section className="overflow-hidden bg-indigo-200 p-4 w-full flex flex-col items-center ">
        <SearchBar onSearch={fetchMovies} loading={loading} />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <MovieList movies={movies} selected={selectedMovies} onSelect={addMovie} />
      </section>

      <section className="bg-gray-600 overflow-hidden">
        <SelectedMovies
          selected={selectedMovies}
          onRemove={removeMovie}
          className="animate-fade-In"
        />
      </section>
      <Analytics />
    </main>
  );
}

export default App;
