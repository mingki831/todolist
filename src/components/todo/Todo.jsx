import React from 'react';
import "./style.css";

function Todo({todo, onDeleteHandler, onEditHandler}) {
    return (
        <div className="todoBox">
            <div>
                <h2>{todo.title}</h2>
                <div>{todo.content}</div>
            </div>
            <div className="button-set">
            <button className='deleteBtn button' onClick={() => onDeleteHandler(todo.id)}>
                삭제
            </button>
            <button className='completeBtn button' onClick={() => onEditHandler(todo.id)}>
                {todo.isDone ? "취소" : "완료"}
            </button>
            </div>
        </div>
    );
};

export default Todo;