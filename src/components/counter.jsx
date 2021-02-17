import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  constructor() {
    super();
    this.handleIncremet = this.handleIncremet.bind(this);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncremet}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
        <ul>{this.renderTags()}</ul>
      </div>
    );
  }

  handleIncremet() {
    this.setState({ value: ++this.state.value });
    console.log(this.state.value);
  }

  renderTags() {
    if (!this.state.tags.length) return <p>There are no tags!</p>;

    return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";

    return (classes += 0 === this.state.value ? "warning" : "danger");
  }

  formatCount() {
    const { value } = this.state;

    console.log(value);

    return 0 === value ? "Zero" : value;
  }
}

export default Counter;
