import React, { useState } from "react";
import "./TimeLine.css";
import Suggestions from "./Suggestions";
import Post from "./posts/Post";
import Story from "./posts/Story";

function TimeLine() {
  const [posts, setPosts] = useState(
    [
      {
        user: "priya",
        postImage:
          "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        likes: 101,
        timestamp: "2d",
        message:"Chasing dreams and catching vibes 🌌✨ #OnTheGrind #EmbraceTheJourney 🚀🎶"
      },
      {
        user: "johndoe",
        postImage:
          "https://images.pexels.com/photos/713829/pexels-photo-713829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        likes: 75,
        timestamp: "3d",
        message:"Chasing sunsets and good vibes 🌅✨ #AdventureTime #PositiveVibesOnly #Emojilicious"
      },
      {
        user: "carolin_",
        postImage:
          "https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=600",
        likes: 122,
        timestamp: "2d",
        message:"Embracing the vibrant hues of life 🌈✨ #ColorfulVibes #EmojisSpeakLouderThanWords"
      },
      {
        user: "flair",
        postImage:
          "https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        likes: 203,
        timestamp: "5d",
        message:"Surround yourself with those who make you laugh until it hurts 😄👯‍♂️🌟 #SquadGoals #LaughterIsTheBestMedicine"
      },
      {
        user: "flair",
        postImage:
          "https://images.pexels.com/photos/9961730/pexels-photo-9961730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        likes: 203,
        timestamp: "5d",
        message:"Surround yourself with those who make you laugh until it hurts 😄👯‍♂️🌟 #SquadGoals #LaughterIsTheBestMedicine"
      },
      {
        user: "Scarlot",
        postImage:
          "https://images.pexels.com/photos/4014602/pexels-photo-4014602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        likes: 501,
        timestamp: "1d",
        message:"Chasing waves and soaking up sunshine—because mermaids have more fun in the pool! 🌊☀️ #PoolsideParadise"
      },
      {
        user: "Kajal",
        postImage:
          "https://images.pexels.com/photos/3802931/pexels-photo-3802931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        likes: 1750,
        timestamp: "5d",
        message:"Surround yourself with those who make you laugh until it hurts 😄👯‍♂️🌟 #SquadGoals #LaughterIsTheBestMedicine"
      },
      {
        user: "Ana",
        postImage:
          "https://images.pexels.com/photos/5008005/pexels-photo-5008005.jpeg?auto=compress&cs=tinysrgb&w=600",
        likes: 303,
        timestamp: "5h",
        message:"Sun-kissed and swimsuit ready. Life's better in a bikini! 👙🌴 #BeachBabe"
      },
      {
        user: "Dua",
        postImage:
          "https://images.pexels.com/photos/5253734/pexels-photo-5253734.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        likes: 1003,
        timestamp: "5d",
        message:"She's not just a drop in the ocean; she's the entire ocean in a drop. 🌊✨ #OceanSoul"
      },
      {
        user: "Rahul_I",
        postImage:
          "https://images.pexels.com/photos/775794/pexels-photo-775794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        likes: 600,
        timestamp: "3d",
        message:"Living my best life, one moment at a time. ✨ #OwnYourStory"
      },
      {
        user: "flair",
        postImage:
          "https://images.pexels.com/photos/1683975/pexels-photo-1683975.jpeg?auto=compress&cs=tinysrgb&w=600",
        likes: 803,
        timestamp: "3d",
        message:"Floating into the weekend with good vibes and even better company. 🌈"
      },
    ]
  )
      
  

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__story">
          <Story />
        </div>
        <div className="timeline__post">
        {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
              message={post.message}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default TimeLine;
