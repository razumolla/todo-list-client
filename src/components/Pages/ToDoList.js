import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useWorks from '../../hooks/useWorks';
import SingleWork from './SingleWork';

const ToDoList = () => {
    const [works, setWorks] = useWorks();



    const handleAddProduct = (event) => {
        event.preventDefault();
        const name = event.target.name.value;

        const url = 'http://localhost:5000/work';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                event.target.reset();
            });

        toast('Work task successfully added');
        window.location.reload(true);
    }

    return (
        <div className='min-h-screen'>
            <div className='w-50 mx-auto p-2'>
                <form onSubmit={handleAddProduct}>
                    <div className="mb-3 mt-3">
                        <input type="text" name="name" className="form-control border p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='New Task Name' />
                    </div>

                    <button type="submit" className="btn btn-sm btn-secondary">add Task</button>
                </form>
            </div>
            <hr />
            <hr />
            <hr />

            <div className='mt-5'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        {/* <input type="checkbox" className="checkbox" /> */}
                                    </label>
                                </th>
                                <th>Task-Name</th>
                                <th>Edit/Rename</th>
                                <th>Done/Completed</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                works.map(work => <SingleWork
                                    key={work._id}
                                    work={work}
                                >

                                </SingleWork>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default ToDoList;