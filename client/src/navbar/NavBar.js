// this is the code for navbar
import React, { useState } from "react";
import './NavBar.css'

const NavBar = () => {
    const [toggle, setToggle] = useState(false)

const toggler = () => {
    setToggle(prevToggle => !prevToggle)
}

return (
  <div>
    <nav className="menuLink">
      {/* <p className="navIcon">Menu</p> */}
      <button onClick={toggler} className="navIcon" >Toggle Menu</button>
      <div className={toggle ? "navMenu" : "hidden"}>
        <a href="/">Book Entry</a>
        <a href="bookSearch">Book Search</a>
      </div>
    </nav>
  </div>
);
}

export default NavBar

// code example to use on the book pages for navbar
// <nav class="menuLink">
// <br />
// <p class="navIcon">Menu</p>
// <div class="navMenu hidden">
// <a href="bookEntry">Home</a>
// <a href="bookSearch">Resume</a>
// </div>
// </nav>
