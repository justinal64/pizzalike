/**
 * @class Button
 */

import * as React from "react";
import styles from "./styles.css";
import { test } from "../helpers";

export type classNames =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "info"
  | "light"
  | "dark"
  | "link";
type Props = { text: string; class: classNames };

export function Button(props: Props) {
  // work on styling the button
  return (
    <button onClick={test} className={styles.btn}>
      {props.text}
    </button>
  );
}
