/**
 * @class Button
 */

import * as React from "react";
import "./styles.css";

export type Props = { text: string; class: string };

export function Button(props: Props) {
  return (
    <div>
      <button className={props.class}>Primary{props.text}</button>
    </div>
  );
}
