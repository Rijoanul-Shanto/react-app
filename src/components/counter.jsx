import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    id: this.props.id,
    tags: ["tag1", "tag2", "tag3"],
  };

  constructor(props) {
    super(props);
    this.handleIncremet = this.handleIncremet.bind(this);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncremet}
          className="btn btn-primary btn-sm"
        >
          Increment {this.state.id}
        </button>
        <ul>{this.renderTags()}</ul>
      </div>
    );
  }

  handleIncremet() {
    this.setState({ value: ++this.state.value });
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

    return 0 === value ? "Zero" : value;
  }
}

export default Counter;
