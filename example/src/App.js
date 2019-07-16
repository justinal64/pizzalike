import React, { Component } from "react";

import { Button, Input, Circle } from "pizzalike";
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
        <h1>Example of Inputs</h1>
        {/* This would need to be the form dialog?? */}
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
        <div>
          <h1>Circle</h1>
          <Circle onclick={() => console.log("sorry")} />
        </div>
      </div>
    );
  }
}
