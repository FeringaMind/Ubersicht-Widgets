import { css, run, React } from "uebersicht";
import {
  globalStyling,
  globalOptions,
  globalStylingPositions,
} from "../style.jsx";

// styles
const quoteStyle = css({
  fontSize: "20px",
});
const quoteeStyle = css({
  fontSize: "16px",
});
const localStyling = {
  fontWeight: "Medium",
};
export const className = {
  ...globalStyling,
  ...localStyling,
  ...globalStylingPositions.topLeftPosition,
};

// store the quotes
let quotes = [];

// Update every second
export const refreshFrequency = globalOptions.quoteRefresh;

// load the quotes.txt file into the array
export const init = (dispatch) => {
  run("cat ./Quotes/quotes.txt").then((output) => {
    quotes = output.split("\n");
    dispatch({ output: 0 });
  });
};

// Last quote displayed
let lastQuoteIndex = 0;

// Get a random number
export const command = "echo $RANDOM";

// needed by the renderer
let quoteIndex = 0;
let [randomQuote, randomQuotee] = ["Loading", "Loading"];

// render the content
export const render = ({ output }) => {
  quoteIndex = output % quotes.length;

  // check if the last quote and this quote are the same
  if (quoteIndex == lastQuoteIndex) {
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }
  lastQuoteIndex = quoteIndex;

  if (quotes.length > 0) {
    // get the random quote
    [randomQuote, randomQuotee] = quotes[quoteIndex].split(" : ");
  }

  return (
    <div>
      <div className={quoteStyle}>
        {randomQuote.split("<br />").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
      <br /> <br />
      <div className={quoteeStyle}>
        {"\u00A0".repeat(4)}⸺ {randomQuotee}
      </div>
    </div>
  );
};
