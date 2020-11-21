import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

export default function Header({ search, updateSearch, getSearch }) {

  const [user, setUser] = useState(false);
  const [username] = useState("");
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in..
        setUser(authUser);
        console.log(user.email);
      } else {
        // user has logged out
        setUser(null);
      }
    });
    return () => {
      // perform some cleanup action
      unSubscribe();
    };
  }, [username, user]);

  return (
    <nav className="header">
      <Link to={user?'/':'/login'}>
        {" "}
        <h1 className="logo">Recipe Garident</h1>
      </Link>
      <div className="search__container">
        <input
          type="text"
          placeholder="search"
          onChange={updateSearch}
          value={search}
          className="header__searchInput "
        />
        <button onClick={getSearch}>Search</button>
      </div>
      <div className="header_right">
      
        {user?
       ( 
         <>
         <strong className="email_display">{user.email}</strong>
        <button onClick={()=>auth.signOut()}>Logout</button>

         </>
         ):
        ( <Link to="/login">
            Login
        </Link>
        
        )}
      </div>
    </nav>
  );
}
