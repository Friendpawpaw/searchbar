import useFetch from "./useFetch";

const SearchResult = ({ seriesURL, movieURL, SearchVal }) => {
  const { data: series, isPending: seriesIsPending } = useFetch(seriesURL);
  const { data: movies, isPending: movieIsPending } = useFetch(movieURL);

  const emphasisWord = (searchTitle) => {
    const searchVal = SearchVal.toLowerCase().split(" ");
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer2 < searchTitle.length) {
      if (searchVal[pointer1] === searchTitle[pointer2]) {
        pointer1++;
        searchTitle[pointer2] = `${searchTitle[pointer2]}(h)`;
      }
      pointer2++;
    }
    return searchTitle.join(" ");
  };

  return (
    <div>
      {movieIsPending && seriesIsPending && <div>Loading...</div>}
      <div className="movie-details">
        <h3 className="text-xs text-gray-600 pl-2 py-1">Movies</h3>
        {movies.Search ? (
          <div>
            <p className="block hover:bg-gray-200 rounded px-2 py-1">
              {emphasisWord(movies.Search[0].Title.toLowerCase().split(" "))}
            </p>

            <p className="block hover:bg-gray-200 rounded px-2 py-1">
              {emphasisWord(movies.Search[1].Title.toLowerCase().split(" "))}
            </p>
            <p className="block hover:bg-gray-200 rounded px-2 py-1">
              {emphasisWord(movies.Search[2].Title.toLowerCase().split(" "))}
            </p>
          </div>
        ) : (
          <div>No movie result</div>
        )}
      </div>
      <div className="series-details">
        <h3 className="text-xs text-gray-600 pl-2 py-1">Series</h3>
        {series.Search ? (
          <div>
            <p className="block hover:bg-gray-200 rounded px-2 py-1">
              {emphasisWord(series.Search[0].Title.toLowerCase().split(" "))}
            </p>
            <p className="block hover:bg-gray-200 rounded px-2 py-1">
              {emphasisWord(series.Search[1].Title.toLowerCase().split(" "))}
            </p>
            <p className="block hover:bg-gray-200 rounded px-2 py-1">
              {emphasisWord(series.Search[2].Title.toLowerCase().split(" "))}
            </p>
          </div>
        ) : (
          <div>No series result</div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
