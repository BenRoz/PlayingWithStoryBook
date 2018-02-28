import React, { Component } from "react";
import Button from "../Button_with_father_Foo";

class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  update(num) {
    this.setState({
      count: this.state.count + num
    });
  }

  render() {
    return (
      <div>
        <Button count={this.state.count} onUpdate={this.update.bind(this)} />
        <span id="text">father Count: {this.state.count}</span>
      </div>
    );
  }
}

export default Foo;
