import React from 'react';

const DeleteWork = ({ work, index }) => {

    const { _id, dName } = work;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{dName}</td>
        </tr>
    );
};

export default DeleteWork;