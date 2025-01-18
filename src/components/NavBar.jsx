import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const toggleMenu = ()=>{
    const menu = document.getElementsByClassName("routes")[0];
    if(menu){
      menu.classList.toggle("active");
      console.log("adding active")
    }else{
      console.log("getting page..")
    }
  }
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Poke Card Hub</Link>
        </div>
        <ul className="routes">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cardsPage">Cards</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="menu" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
