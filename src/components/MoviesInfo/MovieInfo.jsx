import { NavLink } from "react-router-dom";
import noimage from 'images/noimage.png';
import css from "./MoviesInfo.module.css"


export default function MovieInfo({ info }) {

    // const location = useLocation();
    const { original_title, overview, poster_path, vote_average, genres, release_date } = info;

    const filmgenres = [];

    
    if (genres) {
        Object.values(genres).forEach(value => filmgenres.push(value.name))
    }
    
    return (
        <div className={css.positioning}>
            <div className={css.imageContainer}>
                {poster_path === null
                    ? <img src={noimage} alt="noimage" className={css.image} />
                    : <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title} className={css.image}></img>}
            </div>
            <div className={css.infoContainerPositioning}>
                <div className={css.infoContainer}>
                <h1>{original_title}</h1>
                <p>User score: {vote_average}</p>
                <p>Release date: {release_date}</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                 <h2>Genres</h2>
                <p>{filmgenres.join(', ')}</p>

               </div>
                    <div className={css.additionalInfoPositioning}>
     <h4 >More information</h4>
     <ul className={css.additionalInfoLink}>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
        </ul>
                </div>
       
        </div>
        </div>

    )
}