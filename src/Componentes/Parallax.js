import React, { useState, useEffect} from "react";
import { Parallax, Background } from 'react-parallax';
import Horda from "./Horda.png";
import Elmo from "./Elmo.jpg";
import Queima from"./Queima.jpg";
import Saurf from "./Saurf.jpg";
import Forhorde from "./Forhorde.gif";
import Troll from "./Troll.jpg";



const Paralax = () => (
  <div>
  
    <Parallax
      blur={0}
      bgImage={Elmo}
      bgImageAlt="quebra"
      strength={100}
    >
     
      <div style={{ height: '400px' }} />
    </Parallax>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={Forhorde}
      bgImageAlt="queimada"
      strength={100}
    >
      
      <div style={{ height: '300px' }} />
    </Parallax>

    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={Saurf}
      bgImageAlt="sau"
      strength={100}
      
    >
     
      <div style={{ height: '400px' }} />
    </Parallax>

    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={Troll}
      bgImageAlt="sau"
      strength={100}
      
    >
      
      <div style={{ height: '400px' }} />
    </Parallax>

  
    
    
  </div>
);
export default Paralax;