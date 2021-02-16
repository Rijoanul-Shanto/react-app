import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-primary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;

    console.log(count);

    return 0 === count ? "Zero" : count;
  }
}

export default Counter;
