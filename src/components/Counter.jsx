import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new tag"}
        <ul>
          {this.state.tags.map(tag => {
            return <li key={tag}>{tag}</li>;
          })}
        </ul>
      </>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  handleIncrement = () => {
    this.setState(currentState => {
      return { count: currentState.count + 1 };
    });
  };
}

export default Counter;
