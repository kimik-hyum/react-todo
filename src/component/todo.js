import React from "react";

class TodoList extends React.Component {
    
    render () {
        const {list} = this.props;
        return (
            <div className="list-area">
                <ul>
                    {list.length && list.map(({text,check},index) => 
                        <li><span>{text}</span> <button className="del">삭제</button><button className="edit">편집</button></li>
                    )}
                </ul>
            </div>
        );
    }
}
export default TodoList;