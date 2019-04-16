/**
 * @class Button
 */

import * as React from "react";
// import styles from "./styles.css";

export type Props = { text: string };

export default class Button extends React.Component<Props> {
  render() {
    const { text } = this.props;

    return <button>{text}</button>;
  }
}
