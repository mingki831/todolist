import React from 'react';
import Todo from "../todo/Todo";
import "./style.css";

function List({todos, setTodos}) {

    //삭제 메서드
    const onDeleteHandler = (todoId) => {
        const newTodos = todos.filter((todo) => {
          return todo.id !== todoId;
        });
    
        setTodos(newTodos);
      };

    //변경 메서드
    const onEditHandler = (todoId) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return {
                ...todo,
                isDone : !todo.isDone,
                };
            } else {
                return { ...todo };
            }
        });

        setTodos(newTodos);
    };

    return (
        <div className='listCss'>

            <h2>Working.. 🔥</h2>
                <div className="listBox">
                    {todos.map((todo) => {
                        //완료 상태가 아닐 때
                        if (!todo.isDone) {
                            return (
                                <Todo
                                    todo={todo} key={todo.id} setTodos={setTodos}
                                    onDeleteHandler={onDeleteHandler} onEditHandler={onEditHandler}
                                />    
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>

            <h2>Done..! 🎉</h2>
                <div className="listBox">
                    {todos.map((todo) => {
                        //완료 상태일 때
                        if (todo.isDone) {
                            return (
                                <Todo
                                    todo={todo} key={todo.id} setTodos={setTodos}
                                    onDeleteHandler={onDeleteHandler} onEditHandler={onEditHandler}
                                />    
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
        </div>
    );
};

export default List;