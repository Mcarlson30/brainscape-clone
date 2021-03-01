import React, { useReducer, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css'

function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    const handleDemo = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential: 'demo@user.io', password: 'password' })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    return (
        <div className='modal-body'>
            <div className='modal-title'>Log In</div>
            <div classname='modal-form'>
                <form onSubmit={handleSubmit}>
                    <div className='modal-errors'>
                        <ul>
                            {errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='input-and-buttons'>
                        <input
                            type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                            placeholder='Email'
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder='Password'
                        />
                    </div>
                    <div className='modal-login-button'>
                        <button type="submit" className='modal-login-button-text'>Log In</button>
                    </div>
                </form>
                <form onSubmit={handleDemo}>
                    <div className='demo-button'>
                        <button
                            type='submit'
                            className='modal-login-button-text-demo'
                        >Demo</button>
                    </div>
                </form>
            </div>
        </div >
    );
}

export default LoginForm;