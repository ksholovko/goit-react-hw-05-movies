import axios from "axios";

const options = {
  
    headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWNhN2M4YTA1ZGZkNWQ4OTdlMzAwNjk5ODFjZGU2YiIsInN1YiI6IjY1NTRjZGFkZWE4NGM3MTA5MTBiOGZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gVABBeA6GQNEjkvFd3o6J1Cmc4yYrMy1T5k_gQCBZgg'
  }
};

export async function getTrendingMovies() {
    

    const result = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
    
    return result;
}

export async function getMoviesBySearch(query) {

  const result = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
    
    return result;
 
};

export async function getMovieInfo(id) {

  const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
    
  return result;
} 

export async function getMovieCast(id) {

  const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options);
    
  return result;
} 


export async function getMovieReviews(id) {

  const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options);
    
  return result;
} 


