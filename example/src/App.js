import React, { Component } from "react";

import { Button } from "pizzalike";

export default class App extends Component {
  render() {
    return (
      <div>
        <Button text="Primary" class="primary" />
        <Button text="Secondary" class="secondary" />
        <Button text="Success" class="success" />
        <Button text="Danger" class="danger" />
        <Button text="Warning" class="warning" />
        <Button text="Info" class="info" />
        <Button text="Light" class="light" />
        <Button text="Dark" class="dark" />
        <Button text="link" class="link" />
      </div>
    );
  }
}
