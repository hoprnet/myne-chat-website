import React from "react";
import { AppsProblematic } from "../molecules/appsProblematic";
import { MyneImprove } from "../molecules/myneImprove";
import { Sections } from "../molecules/sections";
import { VideoHopr } from "../molecules/videoHopr";

const Home = ({}) => {
  return (
    <>
      <Sections className="video">
        <VideoHopr />
      </Sections>

      <Sections>
        <h3>What makes other chat apps problematic?</h3>
        <AppsProblematic />
      </Sections>

      <Sections>
        <h3>What does myne improve?</h3>
        <MyneImprove />
      </Sections>
    </>
  );
};

export default Home;
