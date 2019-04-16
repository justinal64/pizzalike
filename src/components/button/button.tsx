/**
 * @class Button
 */

import * as React from "react";
import styles from "./styles.css";

export type Props = { text: string; class: string };

export function Button(props: Props) {
  // work on styling the button
  return <button className={styles.btn}>{props.text}</button>;
}
