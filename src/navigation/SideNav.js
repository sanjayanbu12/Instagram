import React from "react";
import "./SideNav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../features/userSlice";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

function Sidenav() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };
  return (
    <div className="sidenav">
      <Link to="/">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />
      </Link>

      <div className="sidenav__buttons">
      <Link to="/">
        <button className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </button>
        </Link>
        <Link to="/search">
          <button className="sidenav__button">
            <SearchIcon />
            <span>Search</span>
          </button>
        </Link>
        <Link to="/explore">
          <button className="sidenav__button">
            <ExploreIcon />
            <span>Explore</span>
          </button>
        </Link>
        <Link to="/reels">
          <button className="sidenav__button">
            <SlideshowIcon />
            <span>Reels</span>
          </button>
        </Link>
        <Link to="/message">
          <button className="sidenav__button">
            <ChatIcon />
            <span>Messages</span>
          </button>
        </Link>
        <Link to="/notification">
          <button className="sidenav__button">
            <FavoriteBorderIcon />
            <span>Notification</span>
          </button>
        </Link>
        <Link to="/create">
          <button className="sidenav__button">
            <AddCircleOutlineIcon />
            <span>Create</span>
          </button>
        </Link>
      </div>
      <div className="sidenav__button">
        <div className="sidenav__buttonItem">
          <span>
            {user.username}{" "}
            <button onClick={handelLogout} className="logout__button">
              Logout
            </button>
          </span>
        </div>
          </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span className="sidenav__buttonText">More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;