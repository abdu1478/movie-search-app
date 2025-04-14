import { Movie } from "../hooks/useMovieSearch";
import { useEffect, useRef, useState } from "react";

interface Props {
  selected: Record<string, Movie>;
  onRemove: (id: string) => void;
  className?: string;
}

export default function SelectedMovies({ selected, onRemove, className }: Props) {
  const [removingId, setRemovingId] = useState<string | null>(null);
  const movies = Object.values(selected);
  const containerRef = useRef<HTMLDivElement>(null);
  const shownIds = useRef<Set<string>>(new Set());

  const handleRemove = (id: string) => {
    setRemovingId(id);
    setTimeout(() => {
      onRemove(id);
      setRemovingId(null);
      shownIds.current.delete(id);
      containerRef.current?.scrollTo({ top: containerRef.current.scrollTop });
    }, 300);
  };

  useEffect(() => {
    movies.forEach((movie) => shownIds.current.add(movie.imdbID));
  }, [movies]);

  return (
    <section
      aria-labelledby="selected-movies-heading"
      className="max-h-screen flex flex-col h-full bg-gray-800 text-white rounded-lg shadow-xl overflow-hidden"
    >
      <header className="p-4 border-b border-gray-700">
        <h1
          id="selected-movies-heading"
          className="text-xl font-semibold text-center md:text-2xl"
        >
          Selected Movies ({movies.length})
        </h1>
      </header>

      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
      >
        {movies.length > 0 ? (
          <ul className="space-y-3">
            {movies.map((movie) => {
              const isNew = !shownIds.current.has(movie.imdbID);
              return (
                <li
                  key={movie.imdbID}
                  className={`relative flex items-start gap-4 p-3 bg-gray-700 rounded-lg transition-opacity duration-300 ${
                    removingId === movie.imdbID ? "animate-fade-Out" : ""
                  } ${isNew ? className : ""}`}
                >
                  <button
                    aria-label={`Remove ${movie.Title} from selection`}
                    onClick={() => handleRemove(movie.imdbID)}
                    className="text-2xl absolute top-0 right-2 text-red-400 hover:text-red-300 transition-colors"
                  >
                    ×
                  </button>

                  <img
                    src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder-movie.png"}
                    alt={`Poster for ${movie.Title}`}
                    width={80}
                    height={120}
                    className="flex-shrink-0 w-20 h-24 object-cover rounded-md"
                    loading="lazy"
                  />

                  <div className="flex-1 min-w-0">
                    <h2 className="text-base font-semibold truncate">{movie.Title}</h2>
                    <p className="text-sm text-gray-400">{movie.Year}</p>
                    <p className="text-xs text-gray-500 mt-1">IMDB ID: {movie.imdbID}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400">
            <p>No movies selected yet</p>
          </div>
        )}
      </div>
    </section>
  );
}
