import { Player, Controls } from "@lottiefiles/react-lottie-player";
import jsonData from "/src/assets/leaftest.json";
import { useLottie, useLottieInteractivity } from "lottie-react";
import { useState, useRef } from "react";

export function LeafTest() {
  const [playAnim, setPlayAnim] = useState(false);

  const options = {
    animationData: jsonData,
    loop: false,
  };

  const { View } = useLottie(options);

  return (
    <>
      {View} <button onClick={() => {}}> click me </button>
    </>
  );
  <Player autoplay loop src={jsonData} style={{ height: "500px", width: "500px" }}>
    {/* <Controls visible={true} buttons={["play", "repeat", "frame", "debug"]} /> */}
  </Player>;
}
