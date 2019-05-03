/**
 * @class Input
 */

import * as React from "react";
import "./styles.css";
import { alignment } from "../helpers";

// These are the fields that would be in the dialog
interface Props {
  labelText: string;
  placeholder: string;
  position: string;
  newLine?: boolean;
}

// How do I bump the input to the next lin ebut allow the next input to be on the same line.......
export function Input(props: Props) {
  const { labelText, placeholder } = props;
  const position = alignment(props.position);
  const displayPosition = props.newLine ? "flex: 0 0 100%" : "1";
  // props.newLine && position === "center" ? "block" : "inline";

  return (
    <div className={position} style={{ flex: displayPosition }}>
      <label>{labelText}:</label>
      <input placeholder={placeholder} />
    </div>
  );
}
