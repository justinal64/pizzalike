/**
 * @class ExampleComponent
 */

import * as React from "react";

import styles from "./styles.css";
import Button from "./components/button/button";
export type Props = { text: string };

class ExampleComponent extends React.Component<Props> {
  render() {
    const { text } = this.props;

    return <div className={styles.test}>Example Component: {text}</div>;
  }
}

export { ExampleComponent, Button };
