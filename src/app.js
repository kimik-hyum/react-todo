import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return <div>Hi, my name is {this.props.name}</div>;
  }
}

var app = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Kimik" />, app);