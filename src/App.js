import React from "react";
import "./App.css";
import CountersList from "./components/CountersList";
import NavBar from "./components/NavBar";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  render() {
    return (
      <>
        <NavBar
          totalCounters={
            this.state.counters.filter(counter => counter.value > 0).length
          }
        />
        <main className="container">
          <CountersList
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </>
    );
  }

  handleIncrement = counter => {
    this.setState(currentState => {
      const counters = [...currentState.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value++;
      return { counters };
    });
  };

  handleReset = () => {
    this.setState(currentState => {
      const counters = currentState.counters.map(counter => {
        counter.value = 0;
        return counter;
      });
      return { counters };
    });
  };

  handleDelete = counterId => {
    this.setState(currentState => {
      const counters = currentState.counters.filter(
        counter => counter.id !== counterId
      );
      return { counters };
    });
  };
}

export default App;
