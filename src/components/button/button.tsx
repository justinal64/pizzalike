/**
 * @class Button
 */

import * as React from "react";
import "./styles.css";
import { theme } from "../helpers";
import { btnType } from "../alias/button";

type Props = { text: string; class: btnType };

export function Button(props: Props) {
  const className = theme(props.class);
  // work on styling the button
  return <button className={className}>{props.text}</button>;
}
