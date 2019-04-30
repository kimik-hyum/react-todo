import React from "react";
import ReactDOM from "react-dom";
import TodoInput from './component/input';
import TodoList from './component/todo';
import './scss/App.scss';

class ReactTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo:[
        {text:"할일목록1",check:false},
        {text:"할일목록2",check:false}
      ]
    }
  }
  render() {
    return (
      <div className="container">
        <div className="head-area">
          <h1>React To do list</h1>
        </div>
        <div className="content">
          <TodoInput />
          <TodoList list={this.state.todo}/>
        </div>
        
      </div>
    )
  }
}

var app = document.getElementById("app");
ReactDOM.render(<ReactTodo name="Kimik" />, app);