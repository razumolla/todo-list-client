import React from 'react';
import useWorks from '../../hooks/useWorks';

const SingleWork = ({ work }) => {
    const [works, setWorks] = useWorks();
    const { _id, name } = work;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/work/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = works.filter(work => work._id !== id);
                    setWorks(remaining);
                })
        }
    }
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" class="checkbox" />
                </label>
            </th>
            <td>
                <div class="flex items-center space-x-3">
                    <div>
                        <div class="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            
            <th>
                <button class="btn btn-ghost btn-xs">Edit</button>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} class="btn btn-ghost btn-xs">Done</button>
            </th>
        </tr>
    );
};

export default SingleWork;