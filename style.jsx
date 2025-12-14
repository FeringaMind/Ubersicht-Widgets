export const globalOptions = {
  // quote widget refresh rate
  quoteRefresh: 300000, // 5 min

  // outter margin of all cubes
  elementMargin: "5%",

  // fix the bottom for macbooks with a notch
  aspectRatioFix: screen.width / screen.height,

  // opacity of the gif widget
  gifOpacity: "0.75",

  // opacity of the timetable
  tableOpacity: "0.5",

  // set the global border radius
  borderRadius: "30px",

  // the light color
  lightColor: "236, 240, 241", // flat ui clouds

  // the dark color
  darkColor: "44, 62, 80", // flat ui midnight blue

  // automatically adjust width and heigth of all elements to be equally spaced
  get elementHeight() {
    // need getter, because at this point elementMargin is not yet initialized when doing a direct calculation
    return `calc((100% - ((${this.elementMargin} * ${this.aspectRatioFix}) * 4)) / 3)`;
  },
  get elementWidth() {
    // need getter, because at this point elementMargin is not yet initialized when doing a direct calculation
    return `calc((100% - ${this.elementMargin} * 4) / 3)`;
  },

  get gif() {
    // system appearance gif change
    // set the paths to your gifs here
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "Gifs/gif-night.gif"
      : "Gifs/gif-day.gif";
  },

  // System Appearance color change
  get backColor() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? `rgba(${globalOptions.lightColor},0.15)`
      : `rgba(${globalOptions.darkColor},0.15)`;
  },
};

export const globalStyling = {
  //// size
  width: globalOptions.elementWidth,
  height: globalOptions.elementHeight,
  //// fonts
  fontFamily: "Arial Rounded MT Bold",
  fontSmoothing: "antialiased",
  lineHeight: 1,
  color: getTextColor(), //FOR DARK MODE
  //// border
  borderRadius: globalOptions.borderRadius,
  ///// only for placement debugging
  borderColor: "rgba(0,0,0)",
  //borderStyle: "solid",
  borderWidth: "1px",
};

export const globalStylingPositions = {
  topLeftPosition: {
    top: `calc(${globalOptions.elementMargin} * ${globalOptions.aspectRatioFix})`,
    left: globalOptions.elementMargin,
    transform: "translate(0%,0%)",
    textAlign: "left",
  },
  topCenterPosition: {
    top: `calc(${globalOptions.elementMargin} * ${globalOptions.aspectRatioFix})`,
    left: "50%",
    transform: "translate(-50%, 0%)",
    textAlign: "center",
  },
  topRightPosition: {
    top: `calc(${globalOptions.elementMargin} * ${globalOptions.aspectRatioFix})`,
    right: globalOptions.elementMargin,
    transform: "translate(0%, 0%)",
    textAlign: "right",
  },
  centerLeftPosition: {
    top: "50%",
    left: globalOptions.elementMargin,
    transform: "translate(0%,-50%)",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  centerCenterPosition: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  centerRightPosition: {
    top: "50%",
    right: globalOptions.elementMargin,
    transform: "translate(0%, -50%)",
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
  },
  bottomLeftPosition: {
    bottom: `calc(${globalOptions.elementMargin} * ${globalOptions.aspectRatioFix})`,
    left: globalOptions.elementMargin,
    transform: "translate(0%, 0%)",
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  bottomCenterPosition: {
    bottom: `calc(${globalOptions.elementMargin} * ${globalOptions.aspectRatioFix})`,
    left: "50%",
    transform: "translate(-50%, 0%)",
    textAlign: "center",
    display: "flex",
  },
  bottomRightPosition: {
    bottom: `calc(${globalOptions.elementMargin} * ${globalOptions.aspectRatioFix})`,
    right: globalOptions.elementMargin,
    transform: "translate(0%, 0%)",
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
};

// Listener
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    window.location.reload(); // refresh all widgets
  });

// System Appearance color change
function getTextColor() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? `rgba(${globalOptions.lightColor},0.3)`
    : `rgba(${globalOptions.darkColor},0.4)`;
}

export const refreshFrequency = false;
