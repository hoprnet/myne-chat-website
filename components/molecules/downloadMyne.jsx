import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { sectionAnimations } from "../../utils/animation";

export const DownloadMyne = ({}) => {
  const refDownloadMyne = useRef();

  useEffect(() => {
    const tl = sectionAnimations(refDownloadMyne, 200, -250);

    return () => {
      tl.kill();
    };
  }, [refDownloadMyne]);


  return (
    <div ref={refDownloadMyne}>
      <h3>Alright, where can I download it?</h3>
      <h3>And, where can I read more about it?</h3>
      <div className="section-download-myne">
        <div className="content-column">
          <div className="col-2">
            <button>
              <FontAwesomeIcon icon={faArrowDown} /> Install myne v0.13
            </button>
          </div>

          <div className="col-2">
            <button>Documentation</button>
          </div>
        </div>
      </div>
    </div>
  );
};
