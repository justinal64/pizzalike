/**
 * @class Button
 */

import * as React from "react";
import "./styles.css";
import { Button } from "../..";
import { btnType } from "../alias/button";

interface Props {
  title: string;
  imgSrc: string;
  cardText: string;
  btnText: string;
  btnClass: btnType;
}

export function Card(props: Props) {
  const { title, imgSrc, cardText, btnText, btnClass } = props;
  return (
    <div>
      <img className="card-img" src={imgSrc} />
      <div className="card-body">
        <h1>{title}</h1>
        <p className="card-text">{cardText}</p>
        <Button text={btnText} class={btnClass} />
      </div>
    </div>
  );
}
