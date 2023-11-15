import { Link, Outlet } from "react-router-dom"

export const MovieDetails = () => {
    
    return <div>
    <h1>Details about movie</h1>
    <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
        </ul>
        <Outlet/>
    </div>
}