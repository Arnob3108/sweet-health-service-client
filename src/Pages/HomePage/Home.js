import React from "react";
import { Helmet } from "react-helmet-async";
import FriendshipWithDoctor from "./FriendshipwithDoctor/FriendshipWithDoctor";
import Map from "./Map/Map";
import Slider from "./Slider/Slider";
import SomeServices from "./SomeServices/SomeServices";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <SomeServices></SomeServices>
      <FriendshipWithDoctor></FriendshipWithDoctor>
      <Map></Map>
      <Helmet>
        <title>Home-Sweet Health</title>
      </Helmet>
    </div>
  );
};

export default Home;
