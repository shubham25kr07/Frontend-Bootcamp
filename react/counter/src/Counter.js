import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };
  addCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  subtractCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div className="container">
        <h1 className="counter">Counter : {this.state.count}</h1>
        <div className="buttons">
          <button className="button-add" onClick={this.addCount}>
            Add
          </button>
          <br />
          <button className="button-subtract" onClick={this.subtractCount}>
            subtract
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
