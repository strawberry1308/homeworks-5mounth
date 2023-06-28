
import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const UserForm = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) =>state.user)

    const handleChange = (key, value) => {
        dispatch({
            type:'UPDATE_USER',
            payload:{
                key,
                value
            }
        })
    }

    return (
        <div>
            <label>
                Name:
                <input
                    type="text"
                    value={user.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                />
            </label>
            <label>
                Age:
                <input
                    type="number"
                    value={user.age}
                    onChange={(e) => handleChange('age', Number(e.target.value))}
                />
            </label>
            <select
                value={user.gender}
                onChange={(e) =>handleChange('gender', String(e.target.value))}
            >
                <option value={'male'}>male</option>
                <option value={'female'}>female</option>
            </select>
            <div>
                <h2>Current User:</h2>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>Gender: {user.gender}</p>
            </div>
        </div>
    );
};

export default UserForm;