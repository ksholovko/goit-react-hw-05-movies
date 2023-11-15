import {  Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLyout";
import { Movies } from "pages/Movies";
import { MovieDetails } from "pages/MovieDetails";
import { Cast } from "./Cast";
import { Reviews } from "./Reviews";
import { Home } from "pages/Home";



export const App = () => {
  return (
    <div>
      

      <Routes>
        <Route path='/' element={<SharedLayout />} >
        <Route index element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>

  
    </div>
  );
};