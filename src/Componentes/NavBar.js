import React, { useState } from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children}</ul>
    </nav>
  
  );
}



