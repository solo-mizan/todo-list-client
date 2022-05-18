import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import AddTodo from './AddTodo';
import useTodo from './useTodo';

const TodoList = () => {

    const [todo, setTodo] = useTodo();

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure to delete this Item?');
        if (confirm) {
            const url = `http://localhost:5000/list/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data) {
                        toast('Item deleted successfully.')
                        const remaining = todo.filter(t => t._id !== id);
                        setTodo(remaining);
                    }
                })
        }
    }

    return (
        <div className='d-flex gap-4 m-3 p-2 mx-auto text-center'>
            {
                todo.map(t => <div>
                    <Card className='mx-auto' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>To Do Name: {t.name}</Card.Title>
                            <Card.Text>
                                {t.description}
                            </Card.Text>
                            <Button onClick={() => handleDelete(t._id)} variant='danger'>Delete</Button>
                        </Card.Body>
                    </Card>
                </div>)
            }
        </div>
    );
};

export default TodoList;