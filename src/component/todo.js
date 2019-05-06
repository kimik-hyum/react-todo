import React from "react";

class TodoList extends React.Component {
    render () {
        return (
            <div className="list-area">
                <ul>
                    <li><span>할일 목록1</span> <button className="del">삭제</button><button className="edit">편집</button></li>
                    <li><span>할일 목록2</span> <button className="del">삭제</button><button className="edit">편집</button></li>
                    <li><span>할일 목록3</span> <button className="del">삭제</button><button className="edit">편집</button></li>
                    <li><span>할일 목록4</span> <button className="del">삭제</button><button className="edit">편집</button></li>
                </ul>
            </div>
        );
    }
}
export default TodoList;