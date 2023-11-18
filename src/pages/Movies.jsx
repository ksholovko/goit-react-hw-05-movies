import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesBySearch } from "API";
import  SearchInput from "components/SearchInput/SearchInput";
import  MoviesList from "components/MoviesList/MoviesList";

const Movies = () => {

  const [movies, setMovies] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
 
    const fetchMovies = async () => {

      try {

        const result = await getMoviesBySearch(searchQuery);
        setMovies(result.data.results);
      
      } catch (error) {
        console.log(error);
      }

    }

    const searchQuery = searchParams.get("query");
    
    if (searchQuery === null) {
      setSearchParams({});
      return;
    } else {
          fetchMovies();
    }
    
  }, [searchParams]);


   const handleSearchUpdate = (query) => {
      if (query === '') {
      return setSearchParams({});
    }
      setSearchParams({ query: query });
   }

   
   return <div>
      <SearchInput onSubmit={handleSearchUpdate} />
      {movies && <MoviesList movies={movies}/>}
   </div>
}

export default Movies;