import { fetchPictures } from "API"
import { useEffect } from "react";

export const Home = () => {
    
    useEffect(() => {
        
        const getPictures = async () => {
    
            try {

                const result = await fetchPictures();


            } catch (error) {

                console.log(error);

            }
        }
        
        getPictures()
    
    }, [])




    
    
    return <div> <h1>Trending today</h1>
    <ul></ul></div>
}