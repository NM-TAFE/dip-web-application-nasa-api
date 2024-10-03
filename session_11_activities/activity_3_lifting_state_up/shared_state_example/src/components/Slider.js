// note this file needs to be moved into my-react-app to work
import React, { useEffect, useState } from "react";

function SpeedSlider({ onTimeChange }) {
  const [time, setTime] = useState(3);
  const inputChange = (x) => {
    setTime(x.target.value);
    onTimeChange(x.target.value);
  };
  return (
    <input
      type="range"
      value={time}
      onChange={inputChange}
      min={1}
      max={10}
    ></input>
  );
}

export function StyledComponent() {
  const [animationTime, setAnimationTime] = useState(3);
  const animationStyle = {
    color: "blue",
    backgroundColor: "lightgray",
    padding: "10px",
    bordeRadius: "5px",
    animation: `fadeInScale ${animationTime}s ease-in-out infinite`,
  };
  const sideEffect = useEffect(() => {
    console.log("animation starting");
    return () => {
      console.log("animation unmounting");
    };
  });
  return (
    <>
      <SpeedSlider onTimeChange={setAnimationTime} />
      <section
        className="animatedSection"
        onAnimationStart={sideEffect}
        style={animationStyle}
      >
        This is a styled section with animation {animationTime}
      </section>
    </>
  );
}
