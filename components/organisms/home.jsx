import React from "react";
import { AppsProblematic } from "../molecules/appsProblematic";
import { Footer } from "../molecules/footer";
import { HowDoesWork } from "../molecules/howDoesWork";
import { MyneImprove } from "../molecules/myneImprove";
import { NewsLetter } from "../molecules/newsLetter";
import { Sections } from "../molecules/sections";
import { VideoHopr } from "../molecules/videoHopr";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

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

      <Sections>
        <h3>But how does it work?</h3>
        <HowDoesWork />
      </Sections>

      <Sections>
        <h3>Fine, where can I download it?</h3>
        <h3>And, where can I read more about it?</h3>
        <button>
          <FontAwesomeIcon icon={faArrowDown} /> Install myne v0.13
        </button>
        <button>Documentation</button>
      </Sections>

      <Sections className="background-gray">
        <h4>Newsletter</h4>
        <NewsLetter />
      </Sections>

      <Sections className="footer background-gray-dark">
        <Footer />
      </Sections>
    </>
  );
};

export default Home;
