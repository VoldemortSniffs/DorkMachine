import React from "react";
import "./footer.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { IconContext } from "react-icons";  

import logo from "../../assets/Badges.png";
const footer = () => {
  const style = { color: "white", fontSize: "1.5em",  }
  
  return (
    <div className="app__footer section-padding">
      <div className="app__footer-heading">
        <h1 className="gradient__text">Do you want to connect ?</h1>
        <p>Have a coffee with me !</p>
      </div>

      <div className="app__footer-links">
        <div className="app__footer-SocialMedia">
        <IconContext.Provider value={{ className: "top-react-icons" }}>  
        
         <a href="https://github.com/VoldemortSniffs"> <AiFillGithub size={70}  /> </a> 
          <a href="https://www.linkedin.com/in/prakhar-martand-b91a311b9/"> <AiFillLinkedin size={70} /> </a>
         <a href="https://twitter.com/prakhar_martand"> <AiFillTwitterCircle size={70} /> </a> 
        
        </IconContext.Provider>
        </div>
      </div>
      <div className="app__footer-copyright">
        <p> @2023 DorkMachine. All rights reserved. </p>
      </div>
    </div>
  );
};

export default footer;
