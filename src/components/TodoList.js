import { Button, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useTodo from './useTodo';

const TodoList = () => {

    const [todo, setTodo] = useTodo();

    const handleDelete = (id) => {
        const url = `https://secure-escarpment-70053.herokuapp.com/list/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    toast('Task deleted successfully.')
                    const remaining = todo.filter(t => t._id !== id);
                    setTodo(remaining);
                }
            })
    }

    const handleComplete = (id, n, d) => {
        const name = n.strike();
        const description = d.strike();
        const data = { name, description };
        const url = `https://secure-escarpment-70053.herokuapp.com/list/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.name !== n) {
                    window.location.reload();
                }
                toast('Task completed successfully.')
            })

    }

    return (
        <div className='list gap-4 m-3 p-2 mx-auto text-center'>
            {
                todo.map(t => <div key={t._id}>
                    <Card className='mx-auto' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Task Name: {t.name}</Card.Title>
                            <Card.Text>
                                {t.description}
                            </Card.Text>
                            <Button className='m-2' onClick={() => handleComplete(t._id, t.name, t.description)}>Complete</Button>
                            <Button className='m-2' onClick={() => handleDelete(t._id)} variant='danger'>Delete</Button>
                        </Card.Body>
                    </Card>
                </div>)
            }
        </div>
    );
};

export default TodoList;