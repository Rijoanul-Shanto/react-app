import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
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
    this.setState({ count: ++this.state.count });
    console.log(this.state.count);
  }

  renderTags() {
    if (!this.state.tags.length) return <p>There are no tags!</p>;

    return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";

    return (classes += 0 === this.state.count ? "warning" : "danger");
  }

  formatCount() {
    const { count } = this.state;

    console.log(count);

    return 0 === count ? "Zero" : count;
  }
}

export default Counter;
