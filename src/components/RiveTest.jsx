import Rive, { Alignment } from "@rive-app/react-canvas";
import React, { Component } from "react";

export function RiveTest() {
  return (
    <div>
      <br></br>
      <br></br>

      <div id="rivebox">
        <Rive
          src=".//src/assets/ecrebocpr.riv"
          stateMachines="State Machine 1"
          // layout={
          //   new Layout({
          //     fit: Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
          //     alignment: Alignment.Center,
          //   })
          // }
          style={{ width: "60vw", height: "90vh", marginLeft: "10vw", marginRight: "10vw", top: "0" }}
          autoplay={true}
        />
      </div>
    </div>
  );
}
