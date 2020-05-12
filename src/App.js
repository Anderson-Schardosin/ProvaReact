import React from 'react';
import './App.css';
import NavItem from "./Componentes/NavItem";
import NavItemcss from "./Componentes/NavItemcss.css";
import NavBar from "./Componentes/NavBar";
import NavBarcss from"./Componentes/NavBarcss.css";
import { getQueriesForElement } from '@testing-library/react';
import Parallax from "./Componentes/Parallax";




export default function App() {
  return (
    <div>
     
      <NavBar>
     

        <NavItem icon="Horda" />
        <NavItem icon="Historia" />
        <NavItem icon="Login" />

       
       
      </NavBar>
      

      
      <Parallax/>
    </div>
  );
}
