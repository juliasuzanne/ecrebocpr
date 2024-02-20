import { useRive, EventType, RiveEventType } from "@rive-app/react-canvas";
import { useCallback, useEffect } from "react";
import sound1 from "/printer.wav";

import useSound from "use-sound";

export function RiveEvents() {
  const { rive, RiveComponent } = useRive({
    src: "ecrebocprlinks.riv",
    stateMachines: "State Machine 1",
    autoPlay: "false",
  });

  const [play] = useSound(sound1);

  const onRiveEventReceived = (riveEvent) => {
    const eventData = riveEvent.data;
    const eventProperties = eventData.properties;
    if (eventData.type === RiveEventType.General) {
      console.log("Event name", eventData.name);
      if (eventData.name == "PlaySound") {
        play();
      }

      // Added relevant metadata from the event
      // console.log("Rating", eventProperties);
      // console.log("Message", eventProperties);
    } else if (eventData.type === RiveEventType.OpenUrl) {
      console.log("Event name", eventData.name);
      // Handle OpenUrl event manually
      if (eventData.name == "GoToGoogle") {
        window.open("/modernmarkets", "_self");
      } else if (eventData.name == "GoToHome") {
        window.open("/modernmarkets", "_self");
      }
    }
  };

  // Wait until the rive object is instantiated before adding the Rive
  // event listener
  useEffect(() => {
    if (rive) {
      rive.on(EventType.RiveEvent, onRiveEventReceived);
    }
  }, [rive]);

  return (
    <div>
      <p>Click to print a receipt that:</p>
      <RiveComponent
        className="riveBox"
        onMouseEnter={() => rive && rive.play()}
        // onMouseLeave={() => rive && rive.pause()}
      />
    </div>
  );
}
