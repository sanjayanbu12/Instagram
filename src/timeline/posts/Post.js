import { Avatar } from "@mui/material";
import MoreHorizicon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import React from "react";
import "./Post.css";

function Post({ user, postImage, likes, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }}>
            <img style={{ width: "70px" }} src={postImage} />
          </Avatar>
          {user} . <span style={{ marginLeft: "5px" }}>{timestamp}</span>
        </div>
        <MoreHorizicon />
      </div>
      <div className="post__image">
        <img src={postImage} alt="model" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutlineIcon className="postIcon" />
            <TelegramIcon className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        <p>{message}</p>
        <p>Liked by {likes} peoples.</p>
      </div>
    </div>
  );
}

export default Post;
