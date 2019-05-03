/**
 * @class Button
 */

import * as React from "react";
import "./styles.css";
import { Button } from "../..";
import { btnType } from "../alias/button";
import { Input } from "../input/input";

interface Props {
  title: string;
  imgSrc: string;
  cardText: string;
  btnText: string;
  btnClass: btnType;
}

export function Card(props: Props) {
  const { title, cardText, btnText, btnClass } = props;
  return (
    <div
      style={{
        width: "350px",
        height: "350px",
        background: "pink",
        textAlign: "center"
      }}
    >
      {/* <img className="card-img" src={imgSrc} /> */}1 ----- 2 ----- 3
      <div className="card-body">
        <h1>{title}</h1>
        <Input
          labelText="First Name"
          placeholder="placeHolder"
          position="center"
        />
        <Input
          labelText="Last Name"
          placeholder="placeHolder"
          position="center"
        />
        <Input
          labelText="Middle Initial"
          placeholder="placeHolder"
          position="center"
        />
        <Input
          labelText="First Name"
          placeholder="placeHolder"
          position="center"
        />
        <p className="card-text">{cardText}</p>
        <Button text={btnText} class={btnClass} />
      </div>
    </div>
  );
}
