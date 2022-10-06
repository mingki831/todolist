import React, {useState} from 'react';
import "./style.css";

let number = 3;

function Form({ setTodos, todos }) {

  const initialState = {
    id: 0,
    title: "",
    content: "",
    isDone: false,
  };

  // Todo 배열 초기화
  const [todo, setTodo] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  // Submit으로 추가하기
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.content.trim() === "") return;
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(initialState);
    number++;
  };

    return (
        <form onSubmit={onSubmitHandler} className="formcss">
            <div className='inputvalue'>
                <h4>제목</h4>
                    <input type="text" name="title" className="inputtitle"
                            value={todo.title} onChange={onChangeHandler}/>
                <h4>내용</h4>
                    <input type="text" name="content" className="inputcontent"
                                value={todo.content} onChange={onChangeHandler}/>
            </div>
            <button className='addbutton'>추가하기</button>
        </form>
    );
}

export default Form;