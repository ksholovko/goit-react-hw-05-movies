import axios from "axios";

export async function fetchPictures() {
    

const options = {
  
    headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWNhN2M4YTA1ZGZkNWQ4OTdlMzAwNjk5ODFjZGU2YiIsInN1YiI6IjY1NTRjZGFkZWE4NGM3MTA5MTBiOGZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gVABBeA6GQNEjkvFd3o6J1Cmc4yYrMy1T5k_gQCBZgg'
  }
};
    const result = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
    
    return result;
}
