import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getMovieReviews } from "API";
import css from "./Reviews.module.css";



const Reviews = () => {

 const {movieId} = useParams();

   const [reviews, setReviews] = useState([]);

   useEffect(() => {
        
      const getMovieRev = async () => {
    
         try {
               
            const result = await getMovieReviews(movieId);
            console.log(result);
            setReviews(result.data.results);

         } catch (error) {

            console.log(error);

         }
      }
        
      getMovieRev();

    
   }, [movieId]);


   return ( <div>
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