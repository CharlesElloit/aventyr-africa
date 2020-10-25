import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <header id="header">
      <div className="app-bar">
        <div className="header-content">
          <Link to="/">
            <span className="logo">A</span>ventyr africa
          </Link>
        </div>
        <div className="experiences">
          {/* <IconButton className="header-search-icon">
            <SearchIcon />
          </IconButton> */}
          <Link to="/experiences" className="experiences_link">
            Experiences
          </Link>
          {/* <Link to="/place">Places to stay</Link> */}
        </div>
        <div className="left-links">
          <IconButton onClick={() => console.log("Hi there!")}>
            <SortIcon className="menu" />
          </IconButton>
          <IconButton>
            <Avatar className="left-link-avatar" />
          </IconButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
