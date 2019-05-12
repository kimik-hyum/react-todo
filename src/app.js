import React from "react";
import ReactDOM from "react-dom";
import TodoInput from './component/input';
import TodoList from './component/todo';
import './scss/App.scss';
if(localStorage.todo == 0 || localStorage.todo == undefined){
  localStorage.setItem('todo', JSON.stringify([{text:'아무것도 없으면 허전하니까',check:false,modify:false},{text:'뭐라도 채워놓겠습니다.',check:true,modify:false},{text:'자신의 todolist를 채워주세요.',check:false,modify:false}]));
}
class ReactTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:'',
      todo:JSON.parse(localStorage.todo)
    }
  }
  handleInput = (e) => {
    this.setState({
      input:e.target.value
    })
  }
  handleDelete = (index) => {
    this.setState({
      todo:this.state.todo.filter((_, i) => i !== index)
    })
  }
  handleCreate = () => {
    this.setState({
      input:'',
      todo:this.state.todo.concat({
        text:this.state.input,
        check:false,
        modify:false
      })
    })
  }
  handleDelete = (index) => {
    this.setState({
      todo:this.state.todo.filter((_, i) => i !== index)
    })
  }
  handleModify = (index,e) => {
    let todos = this.state.todo;
    if(e){
      todos[index].text = e.target.value;
    }else{
      todos[index].modify = !todos[index].modify;
    }
    this.setState({
      todo:todos
    })
  }
  handleCheck = (index) => {
    let todos = this.state.todo;
    todos[index].check = !todos[index].check;
    this.setState({
      todo:todos
    })
  }
  render() {
    localStorage.setItem('todo', JSON.stringify(this.state.todo));
    return (
      <div className="container">
        <div className="head-area">
          <h1>React To do list</h1>
        </div>
        <div className="content">
          <TodoInput onInput={this.handleInput} value={this.state.input} onKey={this.handleKey} onCreate={this.handleCreate}/>
          <TodoList list={this.state.todo} onRemove={this.handleDelete} onModify={this.handleModify} onKey={this.handleKey} onCheck={this.handleCheck}/>
        </div>
      </div>
    )
  }
}

var app = document.getElementById("app");
ReactDOM.render(<ReactTodo name="Kimik" />, app);