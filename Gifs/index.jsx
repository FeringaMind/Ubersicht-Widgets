import {
  globalStyling,
  globalOptions,
  globalStylingPositions,
} from "../style.jsx";

import { css } from "uebersicht";

export const className = {
  ...globalStyling,
  ...globalStylingPositions.bottomRightPosition,
  ...{
    right: "1%",
    bottom: `calc(1% * ${globalOptions.aspectRatioFix})`,
    width: `calc(${globalStyling.width}/1.5)`,
    height: `calc(${globalStyling.height}/1.5)`,
  },
};

const gifStyle = css({});

export const refreshFrequency = false;

export const render = () => {
  return (
    <div className={gifStyle}>
      <img
        src={globalOptions.gif}
        alt="Animated GIF"
        style={{
          opacity: globalOptions.gifOpacity,
          position: "absolute",
          width: "100%",
          height: "100%",
          bottom: "0px",
          right: "0px",
          //objectFit: "contain",
          borderRadius: globalOptions.borderRadius,
        }}
      />
    </div>
  );
};
