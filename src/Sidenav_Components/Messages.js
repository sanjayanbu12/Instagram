import React from 'react'
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Message.css"

function Messages() {
  return (
    <div className="container">
      <span>Message</span>
      <div className="input">
        <input type="text" placeholder="Search here" />
        <SearchIcon style={{ fontSize: "2rem" }} />
      </div>
      <div className="results__cont">
        <h4>Chat with Friends</h4>
        <div className="results__item">
          <Avatar>
            <img style={{ width: "50px" }} src="https://images.pexels.com/photos/3608010/pexels-photo-3608010.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </Avatar>
          <p>Virat_K</p>
          <button>Message</button>
        </div>

        <div className="results__item">
          <Avatar>
            <img style={{ width: "50px" }} src="https://images.pexels.com/photos/1466845/pexels-photo-1466845.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </Avatar>
          <p>Rahul</p>
          <button>Message</button>
        </div>

        <div className="results__item">
          <Avatar>
            <img style={{ width: "80px" }} src="https://images.pexels.com/photos/1310515/pexels-photo-1310515.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </Avatar>
          <p>Riya"."</p>
          <button>Message</button>
        </div>

        <div className="results__item">
          <Avatar>
            <img style={{ width: "80px" }} src="https://images.pexels.com/photos/3626313/pexels-photo-3626313.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </Avatar>
          <p>Sweety._.</p>
          <button>Message</button>
        </div>

        <div className="results__item">
          <Avatar>
            <img style={{ width: "50px" }} src="https://images.pexels.com/photos/5262419/pexels-photo-5262419.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </Avatar>
          <p>David_V</p>
          <button>Message</button>
        </div>
      </div>
    </div>
  );
}

export default Messages