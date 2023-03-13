import {
  EmojiEmotions,
  Label,
  LocationCity,
  PermMedia,
} from "@mui/icons-material";
import React from "react";
import "./share.css";
export default function Share() {
  return (
    <div className="share">
      <div className="share-top">
        <img src="/assets/person/1.jpeg" className="shareImg" alt="" />
        <input
          placeholder="What's in your mind Safaq ?"
          className="shareInput"
        />
      </div>
      <hr className="share-hr" />
      <div className="share-bottom">
      <div className="share-sm">
        <PermMedia className="sm-icon sm-media" />
        <span className="sm-text">Photo or Video</span>
      </div>
      <div className="share-sm">
        <Label className="sm-icon sm-label" />
        <span className="sm-text">Tag</span>
      </div>
      <div className="share-sm">
        <LocationCity className="sm-icon sm-location" />
        <span className="sm-text">Location</span>
      </div>
      <div className="share-sm">
        <EmojiEmotions className="sm-icon sm-emoji" />
        <span className="sm-text">Feelings</span>
      </div>
      <button className="shareBtn">Share</button>
      </div>
    </div>
  );
}
