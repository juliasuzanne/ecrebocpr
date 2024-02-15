import Lottie from "lottie-react";
import groovyWalkAnimation from "/src/assets/leaftest.json";
import testAnimation from "/src/assets/leaftest.json";
import { useRef } from "react";
import { useState, useEffect } from "react";

export const LeafAnimation = () => {
  let [playAnim, setPlayAnim] = useState([]);

  const handleIndexGreetings = () => {
    setPlayAnim({ groovyWalkAnimation });
  };

  useEffect(handleIndexGreetings, []);

  const lottieRef = useRef();

  return (
    <div>
      <Lottie lottieRef={lottieRef} animationData={groovyWalkAnimation} />

      <button
        onClick={() => {
          lottieRef.current.pause();
        }}
      >
        {" "}
        click me{" "}
      </button>
      <button
        onClick={() => {
          lottieRef.current.pause();
        }}
      >
        {" "}
        click me{" "}
      </button>
      <button
        onClick={() => {
          // setPlayAnim({ groovyWalkAnimation });
        }}
      >
        {" "}
        click me{" "}
      </button>
    </div>
  );
};
