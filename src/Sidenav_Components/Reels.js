import React from "react";
import "./Reels.css";
import { Avatar } from "@mui/material"


function Reels() {
  return (
    <div className="reels__container">
      <h4>Reels</h4>

      <div className="reels__items">
        <div className="reels__header">
          <video width="100%" height="100%" controls>
            <source
              src="https://player.vimeo.com/external/537145302.sd.mp4?s=a2cb22a1b179c7c3c797b9b4d2a3707c28101da7&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="reels__footer">
          <Avatar><img width={"50px"} src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></Avatar>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      
      <div className="reels__items">
        <div className="reels__header">
          <video width="100%" height="100%" controls>
            <source
              src="https://player.vimeo.com/external/401621673.sd.mp4?s=09e17e2af343546ed8d89ba2025616349ff25cfd&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="reels__footer">
          <Avatar><img width={"70px"} src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></Avatar>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>

      <div className="reels__items">
        <div className="reels__header">
          <video width="100%" height="100%" controls>
            <source
              src="https://player.vimeo.com/external/402486845.hd.mp4?s=410c92c4f1d1c96993b5e6f1b39c050ecf3d9c76&profile_id=174&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="reels__footer">
          <Avatar><img width={"70px"} src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></Avatar>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>

      <div className="reels__items">
        <div className="reels__header">
          <video width="100%" height="100%" controls>
            <source
              src="https://player.vimeo.com/external/559603010.hd.mp4?s=6154823b34059e4314ee45d443cc646a3ba61fb7&profile_id=174&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="reels__footer">
          <Avatar><img width={"70px"} src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></Avatar>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>

      <div className="reels__items">
        <div className="reels__header">
          <video width="100%" height="100%" controls>
            <source
              src="https://player.vimeo.com/external/571708187.hd.mp4?s=478774b1e05d2e504de70393807c2ce9ef523ba6&profile_id=174&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="reels__footer">
          <Avatar><img width={"70px"} src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></Avatar>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>

      <div className="reels__items">
        <div className="reels__header">
          <video width="100%" height="100%" controls>
            <source
              src="https://player.vimeo.com/external/394580977.sd.mp4?s=8d09acb102aadf74e2a9ae153778f3d7085fe8ef&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="reels__footer">
          <Avatar><img width={"70px"} src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></Avatar>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      
    </div>
  );
}

export default Reels;
