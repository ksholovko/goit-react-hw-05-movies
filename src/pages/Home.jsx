import { useEffect, useState } from "react";

import { getTrendingMovies } from "API"
import  MoviesList from "components/MoviesList/MoviesList";



const Home = () => {

    const [trendingMovies, setTrendingMovies] = useState([]);


    useEffect(() => {
        
        const getMovies = async () => {
    
            try {
                
                const result = await getTrendingMovies();
             
                setTrendingMovies(result.data.results);



            } catch (error) {

                console.log(error);

            }
        }
        
        getMovies();

    
    }, [])


    return <main className="container"> <h1>Trending today</h1>
        <MoviesList movies={trendingMovies}/></main>
}

export default Home;