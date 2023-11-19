import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieInfo } from "API";
import MovieInfo from "components/MoviesInfo/MovieInfo";
import css from "./MovieDetails.module.css"

const MovieDetails = () => {
    
  const [movieInfo, setMovieInfo] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

 const backLinkLocationRef = useRef(location.state?.from ?? '/movies');


   useEffect(() => {
 
    const fetchMovieInfo = async () => {

      try {

        const result = await getMovieInfo(movieId);
        setMovieInfo(result.data);      
      } catch (error) {
        console.log(error);
      }

    }

     fetchMovieInfo();
  
   }, [movieId]);


  return <main className="container">
      
    <Link to={backLinkLocationRef.current}>
      <button className={css.button}>Go back</button></Link>
    <MovieInfo info={movieInfo} />
      <Suspense fallback={<div className={css.indicator}>Loading...</div>}>
      <Outlet />
    </Suspense>
    </main>
}

export default MovieDetails;