import React from "react";
import { AppsProblematic } from "../molecules/appsProblematic";
import { DownloadMyne } from "../molecules/downloadMyne";
import { Footer } from "../molecules/footer";
import { HowDoesWork } from "../molecules/howDoesWork";
import { MyneImprove } from "../molecules/myneImprove";
import { NewsLetter } from "../molecules/newsLetter";
import { Sections } from "../molecules/sections";
import { SectionTitles } from "../molecules/titles";
import { VideoHopr } from "../molecules/videoHopr";

const Home = ({}) => {
  return (
    <>
      <Sections className="video">
        <VideoHopr />
      </Sections>

      <Sections className="align-item-right">
        <SectionTitles
          title="What makes other chat apps problematic?"
          x={-250}
          y={0}
          className="title-apps-problematic padding-bottom-titles"
        />
        <AppsProblematic />
      </Sections>

      <Sections className="align-item-right">
        <SectionTitles
          title="What does myne improve?"
          x={-250}
          y={0}
          className="title-myne-improve padding-bottom-titles"
        />
        <MyneImprove />
      </Sections>

      <Sections className="align-item-right">
        <SectionTitles
          title="But how does it work?"
          x={-250}
          y={0}
          className="title-how-does padding-bottom-titles"
        />
        <HowDoesWork />
      </Sections>

      <Sections>
        <DownloadMyne />
      </Sections>

      <Sections className="background-gray">
        <SectionTitles
          title="Newsletter"
          x={-250}
          y={0}
          className="title-news-letter padding-bottom-titles"
        />
        <NewsLetter />
      </Sections>

      <Sections className="footer background-gray-dark">
        <Footer />
      </Sections>
    </>
  );
};

export default Home;
