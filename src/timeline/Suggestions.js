import React from "react";
import { Avatar } from "@mui/material";
import "./Suggestions.css";

function Suggestions() {
  return (
    <div className="suggesions">
      <div className="profile">
        <Avatar>
          <img
            width={"80px"}
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </Avatar>
        <button className="follow__button">Switch account</button>
      </div>

      <div className="suggestions__title">Suggestions for you</div>

      <div className="suggestion__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>
                <img
                  width={"70px"}
                  src="https://images.pexels.com/photos/10566864/pexels-photo-10566864.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="avatar"
                />
              </Avatar>
            </span>
            <div className="username__info">
              <span className="username">Peter</span>
              <span className="relation">Followed by Vini_Jr</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>

      <div className="suggestion__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>
                <img
                  width={"60px"}
                  src="https://images.pexels.com/photos/2594827/pexels-photo-2594827.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="avatar"
                />
              </Avatar>
            </span>
            <div className="username__info">
              <span className="username">John_y</span>
              <span className="relation">followed by Maverick</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>

      <div className="suggestion__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>
                <img
                  width={"70px"}
                  src="https://images.pexels.com/photos/5067191/pexels-photo-5067191.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="avatar"
                />
              </Avatar>
            </span>
            <div className="username__info">
              <span className="username">Sara_</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>

      <div className="suggestion__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>
                <img
                  width={"60px"}
                  src="https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="avatar"
                />
              </Avatar>
            </span>
            <div className="username__info">
              <span className="username">mia_.</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
