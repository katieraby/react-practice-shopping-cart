import React, { Component } from "react";
import Counter from "./Counter";

class CountersList extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <ul>
          {counters.map(counter => (
            <li key={counter.id}>
              <Counter
                key={counter.id}
                counter={counter}
                handleDelete={onDelete}
                onIncrement={onIncrement}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CountersList;
