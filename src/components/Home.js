import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Home = () => {
    return (
        <>
            <TodoList></TodoList>
            <AddTodo></AddTodo>
        </>
    );
};

export default Home;