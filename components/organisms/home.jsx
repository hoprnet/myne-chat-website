import React from "react";
import { AppsProblematic } from "../molecules/appsProblematic";
import { DownloadMyne } from "../molecules/downloadMyne";
import { Footer } from "../molecules/footer";
import { HowDoesWork } from "../molecules/howDoesWork";
import { MyneImprove } from "../molecules/myneImprove";
import { NewsLetter } from "../molecules/newsLetter";
import { Sections } from "../molecules/sections";
import { VideoHopr } from "../molecules/videoHopr";

const Home = ({}) => {
  return (
    <>
      <Sections className="video">
        <VideoHopr />
      </Sections>

      <Sections className="align-item-right">
        <h3>What makes other chat apps problematic?</h3>
        <AppsProblematic />
      </Sections>

      <Sections className="align-item-right">
        <h3>What does myne improve?</h3>
        <MyneImprove />
      </Sections>

      <Sections className="align-item-right">
        <h3>But how does it work?</h3>
        <HowDoesWork />
      </Sections>

      <Sections>
        <DownloadMyne />
      </Sections>

      <Sections className="background-gray">
        <h3>Newsletter</h3>
        <NewsLetter />
      </Sections>

      <Sections className="footer background-gray-dark">
        <Footer />
      </Sections>
    </>
  );
};

export default Home;
