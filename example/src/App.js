import React, { Component } from "react";

import { Button, Input, Card } from "pizzalike";
import "./index.css";
const test = () => {
  console.log("Test is working correctly");
};

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Example of Buttons</h1>
        <Button onclick={test} text="Primary" class="primary" />
        <Button text="Secondary" class="secondary" />
        <Button text="Success" class="success" />
        <Button text="Danger" class="danger" />
        <Button text="Warning" class="warning" />
        <Button text="Info" class="info" />
        <Button text="Light" class="light" />
        <Button text="Dark" class="dark" />
        <Button text="link" class="link" />
        <Button text="linkhiudiwudgqiu" class="linkhiudiwudgqiu" />
        <h1>Example of Inputs</h1>
        <div className="form container">
          <Input
            labelText="Test"
            newLine={true}
            placeholder="Align Left"
            position="left"
          />
          <Input
            labelText="Test"
            newLine={false}
            placeholder="Align Right"
            position="right"
          />
          <Input
            labelText="Test"
            newLine={true}
            placeholder="Align Center"
            position="center"
          />
        </div>
        <h1>Example of Card Component</h1>
        <Card
          imgSrc="https://cdn57.androidauthority.net/wp-content/uploads/2017/11/lineage-2.jpg"
          title="Lineage 2 is still cool"
          cardText="This is a card text"
          btnText="This is btnText"
          btnClass="primary"
        />
      </div>
    );
  }
}
