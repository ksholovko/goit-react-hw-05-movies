import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getMovieReviews } from "API";
import css from "./Reviews.module.css";



const Reviews = () => {

 const {movieId} = useParams();

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

   useEffect(() => {
        
      const getMovieRev = async () => {
    
         try {
               
            setLoading(true);
            const result = await getMovieReviews(movieId);
             setReviews(result.data.results);
             setLoading(false);

         } catch (error) {

             console.log(error);
             setLoading(false);

         }
      }
        
       getMovieRev();

    
   }, [movieId]);


    if (loading) {
        return <div className={css.indicator}>Loading...</div>
    }


    
    return (<div>
    {reviews.length !== 0 ? (
        <ul className={css.ReviewsList}>
            {reviews.map(({ id, author, content }) => {
                return (
                    <li key={id}>
                        <h4 className={css.authorName}>{author}</h4>
                        <p className={css.text}>{content}</p>
                    </li>
                );
            })}
        </ul>
    ) : (
        <p className={css.noInfo}>Sorry, no reviews</p>
    )}
   </div> )
    
   
}

export default Reviews;