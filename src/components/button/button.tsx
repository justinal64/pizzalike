/**
 * @class Button
 */

import * as React from "react";
import "./styles.css";
import { theme } from "../helpers";
import { btnType } from "../alias/button";

type Props = { text: string; class: btnType; onclick?: any };

const onClickHelper = () => {
  console.log(
    "This is the default onClick event please pass a function to override this console.log."
  );
};

export function Button(props: Props) {
  const className = theme(props.class);
  const onClick = props.onclick ? props.onclick : onClickHelper;
  // props.onclick = log;
  // if (!props.onclick) props.onclick = log;
  // work on styling the button
  return (
    <button onClick={onClick} className={className}>
      {props.text}
    </button>
  );
}
