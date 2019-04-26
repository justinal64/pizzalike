/**
 * @class Input
 */

import * as React from "react";
import "./styles.css";
import { alignment } from "../helpers";

interface Props {
  labelText: string;
  placeholder: string;
  position: string;
}

export function Input(props: Props) {
  const { labelText, placeholder } = props;
  const position = alignment(props.position);
  console.log("position: ", position);
  console.log("placeholder: ", placeholder);
  console.log("labelText: ", labelText);
  return (
    <div className={position}>
      <label>{props.labelText}:</label>
      <input placeholder={props.placeholder} />
    </div>
  );
}
