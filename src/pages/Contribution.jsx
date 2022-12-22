import Calendar from "react-github-contribution-calendar";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function Contribution() {
  const [days, setDays] = useState({});
  const SERVER_URL = "http://localhost:3026/boards";

  useEffect(() => {
    axios.get(SERVER_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  }, []);
  // var values = {};
  var values = {
    "2022-06-23": 1,
    "2022-06-26": 2,
    "2022-06-27": 3,
    "2022-06-28": 4,
    "2022-06-29": 4,
  };
  var until = "2022-12-31";
  var panelAttributes = { rx: 6, ry: 6 };
  var weekLabelAttributes = {
    rotate: 20,
  };
  var monthLabelAttributes = {
    style: {
      "text-decoration": "underline",
      "font-size": 10,
      "alignment-baseline": "central",
      fill: "#AAA",
    },
  };

  return (
    <div className="calender">
      <Calendar
        values={values}
        until={until}
        panelAttributes={panelAttributes}
        weekLabelAttributes={weekLabelAttributes}
        monthLabelAttributes={monthLabelAttributes}
      />
    </div>
  );
}

export default Contribution;
