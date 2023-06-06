import React from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Badges.png';
import './navbar.css';
// BEM -> Block Element Modifier

const Navbar = () => {
  // const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-links">
        <div className="app__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="app__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#brand">Docs</a></p>
          <p><a href="#dmac">DorkM3</a></p>
          <p><a href="#exploitdb">ExploitDB</a></p>
          <p><a href="#blogs">Blogs</a></p>
        </div>
      </div>
      <div className="app__navbar-sign">
       <a href="#dmac"> <button type="button">Get Started</button> </a> 
      </div>
    </div>
  );
};

export default Navbar;