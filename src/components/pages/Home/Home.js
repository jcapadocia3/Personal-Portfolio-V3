import React from "react";
import "./Home.css";
import Avatar from "..../assets/IMG_8160c.jpg"

export default function Home() {
  return (
    <div>
      <img src= {Avatar} thumbnail style={{maxHeight:"10rem"}}/>
    </div>
  );
}
