import { useState } from "react";
import SearchResult from "./searchResult";
const seriesSemiURL = "http://www.omdbapi.com/?apikey=bf9d768b&type=series&s=";
const moviesSemiURL = "http://www.omdbapi.com/?apikey=bf9d768b&s=";

const SearchBar = () => {
  const [SearchVal, setSearchVal] = useState("");
  const [seriesURL, setseriesURL] = useState(null);
  const [movieURL, setMovieURL] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = SearchVal.split(" ").join("+");
    setseriesURL(seriesSemiURL + query);
    setMovieURL(moviesSemiURL + query);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          id="searchbox"
          className="text-xl block w-full appearance-none bg-white placeholder-gray-400 px-4 py-3 rounded-lg outline-none"
          placeholder="Search for movie"
          type="search"
          value={SearchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        ></input>
      </form>
      <SearchResult
        seriesURL={seriesURL}
        movieURL={movieURL}
        SearchVal={SearchVal}
      />
    </div>
  );
};

export default SearchBar;
