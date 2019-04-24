import React from "react";
import ReactDOM from "react-dom";
import TodoInput from './component/input';
import TodoList from './component/todo';
import './scss/App.scss';

class ReactTodo extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="head-area">
          <h1>React To do list</h1>
        </div>
        <TodoInput />
        <TodoList />
      </div>
    )
  }
}

var app = document.getElementById("app");
ReactDOM.render(<ReactTodo name="Kimik" />, app);