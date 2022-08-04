import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };
  addCount = (e) => {
    console.log(e);
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  aa = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${counterStep}`)
      .then((response) => response.json())
      .then((json) => setData(json));
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
          <button
            className="button-add"
            onClick={(e) => {
              this.addCount(e);
            }}
          >
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
