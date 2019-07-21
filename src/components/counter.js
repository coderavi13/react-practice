import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      isShow: false,
      tags: ["tag1", "tag2", "tag3"],
      imageUrl: "https://picsum.photos/800"
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }
  handleIncrement() {
    this.setState({ count: this.state.count + 5 });
  }
  handleShow() {
    this.setState({ isShow: !this.state.isShow });
  }
  render() {
    return (
      <div>
        <div>
          <h1>Hello Ravi... Keep Studying.... You can do it..... </h1>
          <br />
        </div>
        {/* <span className="badge badge-primary m-2"> {this.formatCount()}</span>
        <button onClick={this.handleIncrement}>Increment</button> */}
        <label className="badge badge-primary m-2">Loan Amount:</label>
        <input type="number" ref={input => (this.input = input)} />
        <br />
        <label className="badge badge-primary m-2">Intrest Rate:</label>
        <input type="number" ref={input => (this.input = input)} />
        <br />
        <label className="badge badge-primary m-2">Loan Tenure</label>
        <input type="number" ref={input => (this.input = input)} />

        <ul>
          {this.state.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <button onClick={this.handleShow}>Show Image</button>
        {this.state.isShow && (
          <img src={this.state.imageUrl} alt="Image is missing" />
        )}
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
