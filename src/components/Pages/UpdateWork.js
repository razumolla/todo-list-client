import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateWork = () => {
    const { id } = useParams();
    const [work, setWork] = useState([]);
    useEffect(() => {
        const url = `https://aqueous-crag-10378.herokuapp.com/work/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setWork(data))
    }, []);


    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;

        const updatedUser = { name };
        //
        const url = `https://aqueous-crag-10378.herokuapp.com/work/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                toast('User added successfully');
                event.target.reset();
            })
    }
    return (
        <div className='min-h-screen p-5 test-2xl'>
            <h2 className='text-2xl '> <span className='text-blue-500 font-bold'>Old Task Name: </span> {work.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" className='border p-3 m-2' name="name" placeholder='New Task Name' required />
                <br />

                <button type="submit" className="btn btn-sm btn-secondary m-2">Update Task</button>
            </form>
        </div>
    );
};

export default UpdateWork;