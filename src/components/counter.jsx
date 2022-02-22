import React, { Component } from "react";
import reactDom from "react-dom";

class Counter extends React.Component {
  state = {
    count: 1,
  };

  //solution1
  hanldleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 }); //tell to react that we update
  };

  doHandleIncrement = () => {
    this.hanldleIncrement({ id: 1 });
  };

  //soltuion2 : arrow function
  render() {
    return (
      <div>
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
    classes += this.state.count === 0 ? "dark" : "danger";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
