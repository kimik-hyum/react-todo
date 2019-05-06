import React from "react";

class TodoInput extends React.Component {
    render () {
        return (
            <div className="input-area">
                <input type="text" text=""/>
                <button>추가</button>
            </div>
        );
    }
}
export default TodoInput;