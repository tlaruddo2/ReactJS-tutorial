import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  //handling event
  handleDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => c.id != counterID); // remain if it is true
    // this.setState({counters:counters})
    this.setState({ counters }); //omit when key and value same
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id} //could not access key from Counter component
            onDelete={this.handleDelete}
            // value={counter.value}
            // id={counter.id}
            counter={counter} //contain all data about counter
          />
        ))}
      </div>
    );
  }
}

export default Counters;
