import React from "react";
import { Avatar } from "@mui/material";
import "./Notification.css"


function Notification() {
  return (
    <div className="container">
      <span>Notifications</span>
      <div className="notification__item">
        <h4>Resent</h4>
        <div className="notification__element">
          <Avatar>
            <img style={{ width: "80px" }} src="https://images.pexels.com/photos/2315212/pexels-photo-2315212.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </Avatar>
          <p>Riya./</p>

          <p>
            Liked your post<span> 2h ago.</span>
          </p>
        </div>

        <div className="notification__element">
          <Avatar>
            <img style={{ width: "80px" }} src="https://images.pexels.com/photos/2399641/pexels-photo-2399641.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </Avatar>
          <p>Cherry</p>
          <p>
            Liked your post<span> 5h ago.</span>
          </p>
        </div>

        <div className="notification__element">
          <Avatar>
            <img style={{ width: "60px" }} src="https://images.pexels.com/photos/5763335/pexels-photo-5763335.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </Avatar>
          <p>Smith.</p>
          <p>Accepted your friend request.</p>
        </div>

        <div className="notification__element">
          <Avatar>
            <img style={{ width: "60px" }} src="https://images.pexels.com/photos/667803/pexels-photo-667803.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </Avatar>
          <p>Joshi</p>
          <p>Is in your Contacts</p>
          <button>Follow</button>
        </div>

        <div className="notification__element">
          <Avatar>
            <img style={{ width: "80px" }} src="https://images.pexels.com/photos/1466844/pexels-photo-1466844.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </Avatar>
          <p>Steve..</p>
          <p>New to instagram.</p>
          <button>Follow</button>
        </div>

        <div className="notification__element">
          <Avatar>
            <img style={{ width: "60px" }} src="https://images.pexels.com/photos/786801/pexels-photo-786801.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </Avatar>
          <p>Suii</p>
          <p>Sent you a friend request.</p>
          <button>Accept</button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
