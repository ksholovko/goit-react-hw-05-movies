import { lazy, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getMoviesBySearch } from "API";
import  SearchInput from "components/SearchInput/SearchInput";

const MoviesList = lazy(() => import("components/MoviesList/MoviesList"));

const Movies = () => {

  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);


  useEffect(() => {

 const searchQuery = searchParams.get("query");
    
    const fetchMovies = async () => {

      try {
        
          setMovies([]);
      setLoading(true);
        const result = await getMoviesBySearch(searchQuery);
        setMovies(result.data.results);
         setLoading(false);
        
      
      } catch (error) {
        console.log(error);
         setLoading(false);
        
      }

    }

    
    if (searchQuery === null) {
      setSearchParams({});
      return;
    } else {

      fetchMovies();
     
    }
    
  }, [searchParams, setSearchParams]);


   const handleSearchUpdate = (query) => {
      if (query === '') {
      return setSearchParams({});
    }
      setSearchParams({ query: query });
   }

  
   
   return (
      <main className="container">
    <SearchInput onSubmit={handleSearchUpdate} />
    {loading && <div className='indicator'>Loading...</div>}
    {movies && <MoviesList movies={movies} />}
     </main>
   );
}

export default Movies;