import React, { useState } from "react";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out, bottom ${duration}ms ease-in-out`,
  opacity: 0,
  position: "relative",
  bottom: "-20px",
};

const transitionStyles = {
  entering: { opacity: 1, bottom: "0px" },
  entered: { opacity: 1, bottom: "0px" },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Fade = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        {children}
      </div>
    )}
  </Transition>
);

export default function About() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <button
        className="is-primary"
        onClick={() => setInProp(!inProp)}
        text="click"
      >
        Click
      </button>
      <Fade in={inProp}>
        <h2 className="title is-2 huge">Hello World</h2>
      </Fade>
    </div>
  );
}
