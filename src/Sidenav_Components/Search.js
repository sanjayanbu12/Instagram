import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";

function search() {
  return (
    <div className="container">
      <span>Search</span>
      <div className="input">
        <input type="text" placeholder="Search here" />
        <SearchIcon style={{ fontSize: "2rem" }} />
      </div>
      <div className="results">
        <h4>Recomended for you</h4>
        <div className="result__item">
          <Avatar>
            <img style={{ width: "80px" }} src="https://images.pexels.com/photos/6854281/pexels-photo-6854281.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </Avatar>
          <p>Priya</p>
          <button>Follow</button>
        </div>

        <div className="result__item">
          <Avatar>
            <img style={{ width: "60px" }} src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </Avatar>
          <p>Mark</p>
          <button>Follow</button>
        </div>

        <div className="result__item">
          <Avatar>
            <img style={{ width: "80px" }} src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </Avatar>
          <p>Joe_.</p>
          <button>Follow</button>
        </div>
        <div className="result__item">
          <Avatar>
            <img style={{ width: "60px" }} src="https://images.pexels.com/photos/12903545/pexels-photo-12903545.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </Avatar>
          <p>Anuu</p>
          <button>Follow</button>
        </div>

        <div className="result__item">
          <Avatar>
            <img style={{ width: "60px" }} src="https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </Avatar>
          <p>Mike.</p>
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
}

export default search;