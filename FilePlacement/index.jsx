import {
  globalStyling,
  globalOptions,
  globalStylingPositions,
} from "../style.jsx";

import { css } from "uebersicht";

// Tune these if you like
const BLUR_PX = 8;

const localStyling = {
  // Give it a translucent background so the blur has something to render through.
  // If globalOptions.backColor is a hex like "#222", use a semi-transparent fallback:
  backgroundColor: globalOptions.backColor,

  // The magic
  backdropFilter: `blur(${BLUR_PX}px)`,

  // (Optional) glassy touches
  border: "1px solid rgba(255,255,255,0.25)",
};

export const className = {
  ...globalStyling,
  ...localStyling,
  ...globalStylingPositions.topRightPosition,
  ...{
    height: `calc(100% - (2 * ${globalOptions.elementMargin} * ${globalOptions.aspectRatioFix}))`,
    width: globalStyling.width,
  },
};

const style = css({});

export const refreshFrequency = false;

export const render = () => {
  return (
    <div>
      <div className={style}></div>
    </div>
  );
};
