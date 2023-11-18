import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieCast } from "API";
import noimage from 'images/noimage.png';
import css from "./Cast.module.css"

const Cast = () => {

   const {movieId} = useParams();

   const [actors, setActors] = useState([]);

   useEffect(() => {
        
      const getMovieActors = async () => {
    
            try {
               
               const result = await getMovieCast(movieId);
               setActors(result.data.cast);

            } catch (error) {

                console.log(error);

            } 
        }
        
        getMovieActors();

    
    }, [movieId])

   return (<div>
      {actors.length !== 0 ? (
         <ul className={css.ImageGallery}>
           {actors.map(({ id, name, character, profile_path }) => {
               return (
                        <li key={id} className={css.ImageGalleryItem}>
                       <div>{profile_path === null
                            ? <img src={noimage} alt="noimage" className={css.ImageGalleryItemImage}></img>
                            : <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} className={css.ImageGalleryItemImage}></img>}</div> 
                       <div className={css.ActorInfo}>
                       <h3 className={css.Title}>{name}</h3>
                           <p>{character}</p>
                       </div> 
                    </li> 
                )
            })}
         </ul>
      ) : (
            <p className={css.noInfo}>Sorry, no information</p>
      )
      
   }
        </div>
    )
   
}

export default Cast;