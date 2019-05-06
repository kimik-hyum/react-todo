import React from "react";
import ReactDOM from "react-dom";
import './scss/App.scss';

class ReactTodo extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="head-area">
          <h1>React To do list</h1>
        </div>
        <div className="input-area">
          <input type="text" text=""/>
          <button>추가</button>
        </div>
        <div className="list-area">
          <ul>
            <li><span>할일 목록1</span> <button className="del">삭제</button><button className="edit">편집</button></li>
            <li><span>할일 목록2</span> <button className="del">삭제</button><button className="edit">편집</button></li>
            <li><span>할일 목록3</span> <button className="del">삭제</button><button className="edit">편집</button></li>
            <li><span>할일 목록4</span> <button className="del">삭제</button><button className="edit">편집</button></li>
          </ul>
        </div>
      </div>
    )
  }
}

var app = document.getElementById("app");
ReactDOM.render(<ReactTodo name="Kimik" />, app);