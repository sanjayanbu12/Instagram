import React from "react";
import "./HomePage.css";
import SideNav from "./navigation/SideNav";
import TimeLine from "./timeline/TimeLine";
import Create from "./Sidenav_Components/Createpost";
import Explore from "./Sidenav_Components/Explore";
import Message from "./Sidenav_Components/Messages";
import Notification from "./Sidenav_Components/Notification";
import Reels from "./Sidenav_Components/Reels";
import Search from "./Sidenav_Components/Search";
import { Route, Routes } from "react-router-dom";



const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <SideNav />
      </div>
      <div className="homepage__timeline">
      <Routes>
      <Route path="/" element={<TimeLine />} />
          <Route path="/create" element={<Create />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/message" element={<Message />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
