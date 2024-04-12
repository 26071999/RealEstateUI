import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu_icon.png";
import userLogo from '../../assets/logo.png'
import {Link} from 'react-router-dom';
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = true;
  return (
    <nav>
      <div className="left">
        <a className="logo" href="/">
          <img src={logo} alt="" />
          <span>LamaEstate</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contacts</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        {user ? <div className="user">
            <img src={userLogo} alt="" />
            <span>Prakash Archunan</span>
            <Link to="/profile" className="profile">
                <div className="notification">
                    3
                </div>
                <span>Profile</span>
            </Link>
            </div> 
            :(
        <>
          <a href="">Sign In</a>
          <a className="register" href="">
            Sign Up
          </a>
        </>
        )}
        <div className="menuIcon">
          <img
            onClick={() => setOpen((prev) => !prev)}
            src={menu_icon}
            alt=""
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contacts</a>
          <a href="">Agents</a>
          <a href="">Sign In</a>
          <a className="register" href="">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};
