import Rive, { Alignment } from "@rive-app/react-canvas";
import React, { Component } from "react";

export function RiveTest() {
  return (
    <div>
      <br></br>
      <br></br>

      <br></br>

      <br></br>

      <br></br>
      <div id="rivebox">
        <Rive
          src=".//src/assets/mixing_animations.riv"
          stateMachines="State Machine 1"
          // layout={
          //   new Layout({
          //     fit: Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
          //     alignment: Alignment.Center,
          //   })
          // }
          style={{ width: "auto", height: "50vh", marginLeft: "20vw", marginRight: "20vw" }}
          autoplay={true}
        />
      </div>
    </div>
  );
}
