import { Movie } from "../hooks/useMovieSearch";
import { useState } from "react";

interface Props {
  selected: Record<string, Movie>;
  onRemove: (id: string) => void;
}

export default function SelectedMovies({ selected, onRemove }: Props) {
  const [removingId, setRemovingId] = useState<string | null>(null);
  const movies = Object.values(selected);

  const handleRemove = (id: string) => {
    setRemovingId(id);
    setTimeout(() => {
      onRemove(id);
      setRemovingId(null);
    }, 200); 
  };

  return (
    <div className="w-full h-[calc(100vh-180px)] overflow-y-auto py-2 space-y-3 mx-auto flex flex-col items-center min-h-screen bg-gray-600 text-amber-50 p-4">
      <h1 className="text-2xl border-2 border-gray-300 p-4 w-full text-center font-mono font-semibold rounded-lg">
        Selected Movies
      </h1>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div
              className={`w-full bg-white text-black flex p-4 mt-3 rounded shadow relative ${removingId === movie.imdbID ? "animate-fade-Out" : ""}`}
            >
              <span
                className="absolute right-1 top-1 cursor-pointer"
                onClick={() => handleRemove(movie.imdbID)}
              >
                ❎
              </span>
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/100x150?text=No+Poster"
                }
                alt={movie.Title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="ml-4">
                <h2 className="font-bold">{movie.Title}</h2>
                <p>{movie.Year}</p>
              </div>
            </div>
          ))
        ) : (
          <p
          className="my-auto">No movies selected</p>
        )}
    </div>
  );
}
