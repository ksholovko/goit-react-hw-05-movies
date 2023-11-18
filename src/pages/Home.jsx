import { getTrendingMovies } from "API"
import  MoviesList from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";

const Home = () => {

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        
        const getMovies = async () => {
    
            try {
                setLoading(true);
                const result = await getTrendingMovies();
                setLoading(false);
                setTrendingMovies(result.data.results);



            } catch (error) {

                console.log(error);

            } finally {
                setLoading(false);
            }
        }
        
        getMovies();

    
    }, [])


    return <main className="container"> <h1>Trending today</h1>
        <MoviesList movies={trendingMovies} loading={loading} /></main>
}

export default Home;