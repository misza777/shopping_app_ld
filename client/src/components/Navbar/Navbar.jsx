import React from "react";
import { NavLink } from "react-router-dom";
//icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
//flags
import { US } from "country-flag-icons/react/3x2";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <US title="United States" className="flag" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <NavLink to="/products/1">Women</NavLink>
          </div>
          <div className="item">
            <NavLink to="/products/2">Men</NavLink>
          </div>
          <div className="item">
            <NavLink to="/products/3">Children</NavLink>
          </div>
        </div>
        <div className="center">
          <NavLink to="/">MISZASTORE</NavLink>
        </div>
        <div className="right">
          <NavLink to="/">MISZASTORE</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Contact</NavLink>
          <NavLink to="/">Stores</NavLink>
        </div>
        <div className="icons">
          <SearchIcon />
          <PersonOutlineOutlinedIcon />
          <FavoriteBorderOutlinedIcon />
          <div className="cartIcon">
            <ShoppingCartOutlinedIcon />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
