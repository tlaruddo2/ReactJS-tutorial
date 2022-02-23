import React, { Component } from "react";
import reactDom from "react-dom";

class Counter extends React.Component {
  state = {
    value: this.props.value,
  };

  hanldleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  doHandleIncrement = () => {
    this.hanldleIncrement({ id: 1 });
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <h4>Counter #{this.props.id}</h4>
        <span style={{ margin: 10 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.hanldleIncrement(this)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge alert alert-";
    classes += this.state.value === 0 ? "dark" : "danger";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
