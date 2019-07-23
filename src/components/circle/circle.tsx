/**
 * @class Button
 */

import * as React from "react";
import "./styles.css";
import { MouseEventHandler } from "react";
import { randomColor } from "../helpers";

interface Props {
  text: string;
  onclick?: MouseEventHandler;
}

const changeColor = (event: any) => {
  // TODO: remove type any
  event.target.setAttribute("fill", randomColor());
};

export function Circle(props: Props) {
  const onClick = props.onclick ? props.onclick : changeColor;
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
