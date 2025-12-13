import { css } from "uebersicht";
import { globalStyling, globalStylingPositions } from "../style.jsx";

// styles
const timeStyle = css({
  fontSize: "90px",
  fontWeight: "regular",
  marginTop: "-15px", // fix large text being too far away from the top to be bounded
});
const dateStyle = css({
  fontSize: "40px",
  fontWeigth: "normal",
});
const counterStyle = css({
  fontFamily: "Fira Mono",
  fontSize: "14px",
  fontWeigth: "Bold",
  lineHeight: "1",
  letterSpacing: "-15%",
  marginTop: "-0%",
  fontVariantNumeric: "tabular-nums",
});

const localStyling = {};

export const className = {
  ...globalStyling,
  ...localStyling,
  ...globalStylingPositions.topCenterPosition,
};

export const refreshFrequency = false;

const WEEKDAY_MAP = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  0: "Sunday",
};

const MONTH_MAP = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

const SUFFIX_MAP = {
  1: "st",
  21: "st",
  31: "st",
  2: "nd",
  22: "nd",
  3: "rd",
  23: "rd",
};

let dot,
  hours,
  minutes,
  seconds,
  ampm,
  month,
  day,
  suffix,
  year,
  weekday,
  cw,
  secondCounter;

// not mine
Date.prototype.getWeek = function () {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7,
    )
  );
};

export const render = (props, dispatch) => {
  //// Dispatch the next render
  const now = new Date();
  const delta = 1000 - now.getMilliseconds();
  setTimeout(() => {
    dispatch({});
  }, delta);

  //// parse
  dot = now.getSeconds() % 2 == 0 ? ":" : " ";
  hours = String(now.getHours() % 12 == 0 ? 12 : now.getHours() % 12).padStart(
    2,
    "0",
  );
  ampm = now.getHours() - hours >= 12 ? "PM" : "AM";
  minutes = String(now.getMinutes()).padStart(2, "0");
  month = MONTH_MAP[now.getMonth()];
  day = String(now.getDate()).padStart(2, "0");
  suffix = SUFFIX_MAP[now.getDate()] ?? "th";
  year = now.getFullYear();
  weekday = WEEKDAY_MAP[now.getDay()];
  cw = now.getWeek();
  const sec = now.getSeconds(); // 0..59
  const DOT = "\u2219";
  const TOTAL = 60;

  // 60-character raw bar: first `sec` are bars, rest are dots
  const raw = "\u2759".repeat(sec) + DOT.repeat(TOTAL - sec);

  // Insert a space after every 10 characters
  secondCounter = raw.match(/.{1,10}/g).join(" ");

  //// return content
  return (
    <div>
      <div className={timeStyle}>
        {hours}
        {":"}
        {minutes} {ampm}
      </div>
      <br />
      <div className={counterStyle}>{secondCounter}</div>
      <br />
      <div className={dateStyle}>
        {month} {day}
        {suffix} {year}
      </div>
      <br />
      <div className={dateStyle}>
        {weekday}, CW {cw}
      </div>
    </div>
  );
};
