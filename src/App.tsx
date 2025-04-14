import { useState } from "react";
import { useMovieSearch, Movie } from "./hooks/useMovieSearch";
import SearchBar from "./components/SearchBar.tsx";
import MovieList from "./components/MovieList.tsx";
import SelectedMovies from "./components/selectedMovies.tsx";

function App() {
  const { movies, loading, error, fetchMovies } = useMovieSearch();
  const [selectedMovies, setSelectedMovies] = useState<Record<string, Movie>>({});

  const addMovie = (movie: Movie) => {
    setSelectedMovies((prev) => ({
      ...prev,
      [movie.imdbID]: movie,
    }));
  };

  const removeMovie = (id: string) => {
    setSelectedMovies((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  return (
    <section className="grid grid-cols-2 max-h-screen overflow-hidden">
      <div className="bg-indigo-200 p-4 flex flex-col items-center w-full ">
        <SearchBar onSearch={fetchMovies} loading={loading} />
        {error && <p className="text-red-500">{error}</p>}
        <MovieList movies={movies} selected={selectedMovies} onSelect={addMovie} />
      </div>
      <SelectedMovies className={`animate-fade-In`} selected={selectedMovies} onRemove={removeMovie} />
    </section>
  );
}

export default App;
