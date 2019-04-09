import React, { Component } from "react";

import ExampleComponent from "pizzalike";
import Button from "pizzalike";

export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent text="Modern React component module" />
        <Button text="This is a test" />
      </div>
    );
  }
}
