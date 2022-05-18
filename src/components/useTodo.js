import React, { useEffect, useState } from 'react';

const useTodo = () => {

    const [todo, setTodo] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/list';
        fetch(url)
            .then(res => res.json())
            .then(data => setTodo(data));
    }, [])

    return [todo, setTodo];
};

export default useTodo;