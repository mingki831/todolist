import React, {useState} from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

const TodoList = () => {
    
    //todo 객체들을 todos 객체로 정의
    const[todos, setTodos] = useState(
        [   //default state 2개
            {id:1, title:"리액트 공부하기", content: "리액트 기초를 공부해봅시다.", isDone: true},
            {id:2, title:"킥복싱 가기", content: "살빼자", isDone: false}
        ]
    );

    return (
        //전체 Layout 설정
        <Layout>
            <Header/>
            {/* Form, List 컴포넌트에 todos와 setTodos 전달 */}
            <Form todos={todos} setTodos={setTodos}/>
            <List todos={todos} setTodos={setTodos}/>
        </Layout>
    );
};

export default TodoList;