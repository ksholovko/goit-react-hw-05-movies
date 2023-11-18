import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieInfo } from "API";
import  MovieInfo  from "components/MovieInfo";

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
  
   }, []);


  return <div>
      
    <Link to={backLinkLocationRef.current}>Go back</Link>
    <h1>Details about movie</h1>
    <MovieInfo info={movieInfo} />
    <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
        </ul>
        <Outlet/>
    </div>
}

export default MovieDetails;