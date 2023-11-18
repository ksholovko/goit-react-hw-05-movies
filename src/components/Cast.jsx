import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "API";
import noimage from 'images/noimage.png';

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
        <ul>
           {actors.map(({ id, name, character, profile_path }) => {
               return (
                        <li key={id}>
                       <div>{profile_path === null
                            ? <img src={noimage} alt="noimage"></img>
                            : <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name}></img>}</div> 
                        <h3>{name}</h3>
                        <p>{character}</p>
                    </li> 
                )
            })}
         </ul>
         </div>
    )
   
}

export default Cast;