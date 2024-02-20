import Rive, { Alignment } from "@rive-app/react-canvas";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export function RiveTest() {
  return (
    <div>
      <br></br>
      <br></br>
      <a href="/email">
        <div id="boxy"></div>
      </a>
      <div id="rivebox">
        <Rive
          src="ecrebocpr.riv"
          stateMachines="State Machine 1"
          // layout={
          //   new Layout({
          //     fit: Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
          //     alignment: Alignment.Center,
          //   })
          // }

          style={{ width: "60vw", height: "90vh", marginLeft: "10vw", marginRight: "10vw", top: "0" }}
          autoPlay={true}
        />
      </div>
    </div>
  );
}
