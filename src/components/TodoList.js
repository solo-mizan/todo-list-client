import React, { useEffect, useState } from 'react';

const TodoList = () => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/list';
        fetch(url)
            .then(res => res.json())
            .then(data => setTodo(data));
    }, [])

    return (
        <div>
            {
                todo.map(t => <div>
                    Name: {t.name}
                </div> )
            }
        </div>
    );
};

export default TodoList;