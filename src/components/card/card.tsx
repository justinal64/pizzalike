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
  const { title, cardText, btnClass } = props;
  return (
    <div
      style={{
        width: "350px",
        height: "350px",
        background: "pink",
        textAlign: "center",
        boxShadow: "5px 5px 10px gray",
        margin: "0 auto"
      }}
    >
      <div>
        <span style={{ color: "blue" }}>1</span>
        <span>-----2</span>
        <span>-----3</span>
      </div>
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
        <Button text="Back" class={btnClass} />
        <Button text="Next" class={btnClass} />
      </div>
    </div>
  );
}
