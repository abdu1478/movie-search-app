import { useState, useEffect } from "react";

interface Props {
  onSearch: (query: string) => void;
  loading: boolean;
}

export default function SearchBar({ onSearch, loading }: Props) {
  const [input, setInput] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (input.length >= 3) onSearch(input);
    }, 500);
    return () => clearTimeout(debounce);
  }, [input, onSearch]);

  return (
    <div className="w-full max-w-md mb-4 flex">
      <input
        type="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a movie..."
        className="flex-1 rounded-l-sm h-10 p-2.5 border-2 border-gray-400 focus:outline-none"
      />
      <button
        className="bg-gray-500 text-white px-4 rounded-r-sm"
        onClick={() => onSearch(input)}
        disabled={loading}
      >
        {loading ? "..." : "🔍"}
      </button>
    </div>
  );
}
