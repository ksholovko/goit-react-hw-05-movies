import { useLocation } from "react-router-dom";
import noimage from 'images/noimage.png';

export default function MovieInfo({ info }) {

    const location = useLocation();
    const { original_title, overview, poster_path, vote_average, genres, release_date } = info;

    const filmgenres = [];

    
    if (genres) {
        Object.values(genres).forEach(value => filmgenres.push(value.name))
    }
    
    return (
 <div>
            <div>
                {poster_path === null
                    ? <img src={noimage} alt="noimage"></img>
                    : <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={original_title}></img>}
            </div>
            <div>
                <h2>{original_title}</h2>
                <p>User score: {vote_average}</p>
                <p>Release date: {release_date}</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                 <h3>Genres</h3>
                <p>{filmgenres.join(', ')}</p>
            </div>
        </div>

    )
}