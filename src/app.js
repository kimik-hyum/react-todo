import React from "react";
import ReactDOM from "react-dom";
import TodoInput from './component/input';
import TodoList from './component/todo';
import './scss/App.scss';

class ReactTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:'',
      todo:[
        {text:"할일목록1",check:false},
        {text:"할일목록2",check:false}
      ]
    }
  }
  handleInput = (e) => {
    this.setState({
      input:e.target.value
    })
  }
  handleKey = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }
  handleCreate = () => {
    this.setState({
      input:'',
      todo:this.state.todo.concat({
        text:this.state.input,
        check:false
      })
    })
  }
  handleDelete = (index) => {
    this.setState({
      todo:this.state.todo.filter((_, i) => i !== index)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="head-area">
          <h1>React To do list</h1>
        </div>
        <div className="content">
          <TodoInput onInput={this.handleInput} value={this.state.input} onKey={this.handleKey} onCreate={this.handleCreate}/>
          <TodoList list={this.state.todo} onRemove={this.handleDelete}/>
        </div>
        
      </div>
    )
  }
}

var app = document.getElementById("app");
ReactDOM.render(<ReactTodo name="Kimik" />, app);