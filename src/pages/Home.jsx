import { fetchPictures } from "API"
import { useEffect } from "react";

export const Home = () => {




    useEffect(() => {
        
        const getPictures = async () => {
    
            try {

                const result = await fetchPictures();
                 console.log(result);



            } catch (error) {

                console.log(error);

            }
        }
        
        getPictures()

        return
    
    }, [])


    return <div> <h1>Trending today</h1>
    <ul></ul></div>
}