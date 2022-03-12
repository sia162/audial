import React from "react";
import COVER from "../../assets/cover.jpg";
import { FaPauseCircle } from "react-icons/fa";
import { AiFillStepForward, AiFillStepBackward } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { MdQueueMusic } from "react-icons/md";
import "./player.css";

const Player = () => {
  return (
    <div className="container-fluid player-container">
      <div className="cover-img img">
        <img src={COVER} alt="cover-img" />
      </div>
      <div className="info-panel">
        <h1>Riha</h1>
        <h5>Anuv Jain</h5>
        <div className="controls">
          <a href="#queue">
            <MdQueueMusic />
          </a>
          <a href="#backward">
            <AiFillStepBackward />
          </a>
          <a href="#playOrpause">
            <FaPauseCircle />
          </a>
          <a href="#forward">
            <AiFillStepForward />
          </a>
          <a href="#search">
            <FiSearch />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Player;
