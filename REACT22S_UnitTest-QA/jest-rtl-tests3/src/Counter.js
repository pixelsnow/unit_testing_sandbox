// from https://github.com/mwaz/jest-snapshot-testing
// https://circleci.com/blog/snapshot-testing-with-jest/ 

import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: Math.max(0, this.state.count - 1),
    });
  }
  render() {
    // <h1>COUNTER</h1>
    return (
      <div className="counter">
       
        <div className="buttons">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default Counter;