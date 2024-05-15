import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions/userActions';  // Ensure you have this action created

function AddUserForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Dispatch the addUser action with username and password
        dispatch(addUser({ username, password }));
        setUsername('');
        setPassword('');
    };

    return (
        <div>
            <h3>Add New User</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default AddUserForm;