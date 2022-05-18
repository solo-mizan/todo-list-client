import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddTodo = () => {
    const { register, handleSubmit, clearErrors, reset } = useForm();


    const onSubmit = data => {
        console.log(data);
        const url = `https://secure-escarpment-70053.herokuapp.com/list`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    toast('New Todo added successfully!')
                    reset();
                    window.location.reload();
                }
            })
    };

    return (
        <div className='w-50 mx-auto text-center m-4'>
            <h1 className='m-2 text-dark'>Add a New Todo Here</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='my-4 btn btn-success' type="submit" value="Add Task" />
            </form>
        </div>
    );
};

export default AddTodo;