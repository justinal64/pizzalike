/**
 * @class Button
 */

import * as React from "react";
import "./styles.css";
import { MouseEventHandler } from "react";

interface Props {
  text: string;
  // class: btnType;
  onclick?: MouseEventHandler; // TODO: This needs to be fixed...
}

const onClickHelper = () => {
  console.log("Pass a function to override!");
};

export function Circle(props: Props) {
  const onClick = props.onclick ? props.onclick : onClickHelper;
  return (
    <svg height="100" width="100">
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="black"
        strokeWidth="3"
        fill="red"
        onClick={onClick}
      />
    </svg>
  );
}
