import { useEffect, useState } from "react";

import { getTrendingMovies } from "API"
import  MoviesList from "components/MoviesList/MoviesList";



const Home = () => {

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        
        const getMovies = async () => {
    
            try {
                
                setLoading(true);
                const result = await getTrendingMovies();
             
                setTrendingMovies(result.data.results);
                setLoading(false);


            } catch (error) {

                console.log(error);
                setLoading(false);
            }
        }
        
        getMovies();

    
    }, [])


  return ( <main className="container">
          <h1>Trending today</h1>
          {loading && <div className='indicator'>Loading...</div>}
          {trendingMovies &&  <MoviesList movies={trendingMovies}  />}
        </main>
)
     
}

export default Home;