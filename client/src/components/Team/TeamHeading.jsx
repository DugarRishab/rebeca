import React from "react";
import "./TeamHeading.css";

function TeamHeading({ date, datetxt, customcss }) {
  var bgsetter = datetxt.toLowerCase();
  return (
    <div className={"eheading " + customcss}>
      <div className={`before ${datetxt.toLowerCase(bgsetter)}`}></div>
      <div className="big">{date}</div>
      <div className="small">
        <span className="big1">{datetxt}</span>
      </div>
    </div>
  );
}

export default TeamHeading;
