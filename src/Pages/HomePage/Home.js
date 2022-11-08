import React from "react";
import FriendshipWithDoctor from "./FriendshipwithDoctor/FriendshipWithDoctor";
import Map from "./Map/Map";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <FriendshipWithDoctor></FriendshipWithDoctor>
      <Map></Map>
    </div>
  );
};

export default Home;
