import { NavLink, Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
      <>
    <header className={css.HeaderStyle}>
        <nav>
        <ul className={css.List}>            
        <li><NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/movies">Movies</NavLink></li>
          </ul>          
        </nav>
    </header>
    <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;