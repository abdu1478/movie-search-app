import { Movie } from "../hooks/useMovieSearch";

interface Props {
  movies: Movie[];
  selected: Record<string, Movie>;
  onSelect: (movie: Movie) => void;
}

export default function MovieList({ movies, selected, onSelect }: Props) {
  return (
    <section 
  aria-labelledby="movie-results-heading"
  className="w-full max-w-md h-[calc(100vh-100px)] flex flex-col bg-gray-800 rounded-lg shadow-xl overflow-y-auto space-y-3 scroll-smooth scrollbar scrollbar-w-4 scrollbar-thinb scrollbar-thumb-gray-600 scrollbar-track-gray-800"
>
  <header className="p-4 border-b border-gray-700">
    <h1 
      id="movie-results-heading"
      className="text-xl font-semibold text-center md:text-2xl text-white"
    >
      Search Results
    </h1>
  </header>

  <ul className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
    {movies.map((movie) => {
      const isSelected = selected[movie.imdbID];
      
      return (
        <li key={movie.imdbID}>
          <button
            aria-label={`Select ${movie.Title}`}
            onClick={() => onSelect(movie)}
            className={`w-full text-left flex items-start gap-3 p-3 rounded-lg transition-all ${
              isSelected 
                ? 'bg-emerald-600/30 ring-2 ring-emerald-400' 
                : 'bg-gray-700 hover:bg-gray-600/50'
            }`}
            disabled={!!isSelected}
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder-movie.png"}
              alt={`Poster for ${movie.Title}`}
              width={60}
              height={90}
              className="flex-shrink-0 w-15 h-[90px] object-cover rounded-md"
              loading="lazy"
            />
            
            <div className="flex-1 min-w-0 text-white">
              <h2 className="text-base font-medium truncate">{movie.Title}</h2>
              <div className="text-sm text-gray-400">
                <span>{movie.Year}</span>
                <span className="mx-2">•</span>
                <span className="capitalize">{movie.Type}</span>
              </div>
            </div>
          </button>
        </li>
      );
    })}
  </ul>
</section>

  );
}