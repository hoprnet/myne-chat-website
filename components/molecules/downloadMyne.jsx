import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { sectionAnimations } from "../../utils/animation";

export const DownloadMyne = ({}) => {
  const refTitleOne = useRef();
  const refTilteTwo = useRef();

  useEffect(() => {
    const tl = sectionAnimations(refTitleOne, 0, -250);

    return () => {
      tl.kill();
    };
  }, [refTitleOne]);

  
  useEffect(() => {
    const tl = sectionAnimations(refTilteTwo, 250, -250);

    return () => {
      tl.kill();
    };
  }, [refTilteTwo]);
  return (
    <>
      <h3 ref={refTitleOne}>Alright, where can I download it?</h3>
      <h3 ref={refTilteTwo}>And, where can I read more about it?</h3>
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
    </>
  );
};
