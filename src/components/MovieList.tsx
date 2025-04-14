import { Movie } from "../hooks/useMovieSearch";

interface Props {
  movies: Movie[];
  selected: Record<string, Movie>;
  onSelect: (movie: Movie) => void;
}

export default function MovieList({ movies, selected, onSelect }: Props) {
  return (
    <div className="w-full h-[calc(100vh-100px)] overflow-y-auto py-2 space-y-3 max-w-md overflow-x-hidden max-h-screen pr-2">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          onClick={() => !selected[movie.imdbID] && onSelect(movie)}
          className={` shadow-md rounded-lg flex p-1 cursor-pointer hover:shadow-lg active:scale-95 h-[100px] ${selected[movie.imdbID] ? "bg-emerald-400" : "bg-white"}`}
        
        >
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/100x150?text=No+Poster"}
            alt={movie.Title}
            className="w-16 object-fill rounded h-full"
          />
          <div className="ml-4">
            <h2 className="font-bold">{movie.Title}</h2>
            <p>{movie.Type}</p>
            <p>{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
