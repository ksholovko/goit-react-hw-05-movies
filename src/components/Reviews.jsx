import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getMovieReviews } from "API";



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


   return (<ul>
           {reviews.map(({ id, author, content }) => {
               return (
                  <li key={id}>
                     <h4>{author}</h4>
                     <p>{content}</p>
                    </li> 
                )
            })}
         </ul>
    )
}

export default Reviews;