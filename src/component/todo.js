import React from "react";

class TodoList extends React.Component {
    render () {
        const {list} = this.props;
        return (
            <div className="list-area">
                <ul>
                    {list.length && list.map(({text,check,modify},index) => 
                        <li className={`todo-text ${ check ? ' checked' : '' }`} onClick={() => {this.props.onCheck(index)}} key={index}>
                        {modify ? <input ref={this.props.input} type="text" defaultValue={text} onChange={(e,i) => {this.props.onModify(index,e)}} onClick={(e) => {e.stopPropagation();}} onKeyPress={(e) => {this.props.onKey(e,index)}}/>
                         : <span>{text}</span>}
                          <button className="del" onClick={(e) => {e.stopPropagation(); this.props.onRemove(index)}}>삭제</button>
                          <button className="edit" onClick={(e) => {e.stopPropagation(); this.props.onModify(index)}}>{modify ? '완료' : '편집'}</button></li>
                    )}
                </ul>
            </div>
        );
    }
}
export default TodoList;