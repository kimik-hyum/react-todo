import React from "react";

class TodoInput extends React.Component {
    render () {
        return (
            <div className="input-area">
                <input type="text" text="" value={this.props.value} onChange={this.props.onInput} onKeyPress={this.props.onKey}/>
                <button onClick={this.props.onCreate}>추가</button>
            </div>
        );
    }
}
export default TodoInput;