import { Link, useLocation } from "react-router-dom";
import css from './MoviesList.module.css';
import noimage from 'images/noimage.png';

const MoviesList = ({ movies, loading }) => {
const location = useLocation();

   return (
    <div>
      {!loading ? (
        <ul className={css.ImageGallery}>
          {movies.map((movie) => (
            <li className={css.ImageGalleryItem} key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <div>
                  <img
                    className={css.ImageGalleryItemImage}
                    src={movie.poster_path === null ? noimage :`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    width="320"
                  />
                </div>
                <h2 className={css.Title}>{movie.title}</h2>
              </Link>
            </li>
          ))}
         </ul>
         
      ) : (
        <p className={css.indicator}> Loading...</p>
      )}
    </div>
  );
} 

export default MoviesList;