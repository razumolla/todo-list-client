import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useWorks from '../../hooks/useWorks';
import { Link } from 'react-router-dom';

const SingleWork = ({ work }) => {
    const [works, setWorks] = useWorks();
    const { _id, name } = work;

    const handleDelete = id => {

        // post from todo list to completed route
        const dName = name;
        const url = 'https://aqueous-crag-10378.herokuapp.com/completed';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                dName
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));



        // delete from todo list
        const confirm = window.confirm('Are you sure?')
        if (confirm) {
            const url = `https://aqueous-crag-10378.herokuapp.com/work/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = works.filter(work => work._id !== id);
                    setWorks(remaining);
                })
            toast(`${name} task successfully Completed`);
            window.location.reload(true);
        }
    }
    // checkbox
    const [change, setChange] = useState(false);
    function buttonHandler() {
        setChange(!change)
    }


    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" onChange={buttonHandler} className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>

            <th>

                <Link to={`/update/${_id}`}><button> Update </button></Link>
            </th>
            <th>
                <button disabled={!change} onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Done</button>
            </th>
        </tr>
    );
};

export default SingleWork;