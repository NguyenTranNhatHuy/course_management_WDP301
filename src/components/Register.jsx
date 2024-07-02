import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/AccountServices';

function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [warning, setWarning] = useState('');
    const navigate = useNavigate();

    const validateUsername = (username) => {
        const regex = /^[a-zA-Z0-9_]{7,20}$/; // Allows alphanumeric characters and underscores, length between 3 and 16
        return regex.test(username);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        if (repeatPassword && event.target.value !== repeatPassword) {
            setWarning('Passwords do not match');
        } else {
            setWarning('');
        }
    };

    const handleRepeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value);
        if (password && event.target.value !== password) {
            setWarning('Passwords do not match');
        } else {
            setWarning('');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateUsername(username)) {
            toast.error('Invalid username. It should be 7-20 characters long and can contain alphanumeric characters and underscores.');
            return;
        }

        if (!validatePassword(password)) {
            toast.error('Password must be at least 8 characters long.');
            return;
        }

        if (password !== repeatPassword) {
            setWarning('Passwords do not match');
            return;
        }

        try {
            const accessToken = 'your-access-token'; // Replace with actual access token if needed
            const account = {
                username,
                fullname: '',
                password,
                email,
                DOB: '',
                admin: false
            };
            const response = await register(account, accessToken);
            if (response.data.success) {
                toast.success('Registration Successful!');
                setTimeout(() => {
                    navigate('/login');
                }, 2000); // Delay to allow user to see the success message
            }
        } catch (error) {
            toast.error('Registration Failed: ' + error.response.data.err.message);
        }
    };

    return (
        <div>
            <div className="login-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <form onSubmit={handleSubmit} id="register-form" className="white-popup-block">
                                <div className="col-md-4 login-social">
                                    <h4>Register with social</h4>
                                    <ul>
                                        <li className="facebook">
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li className="twitter">
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li className="linkedin">
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-8 login-custom">
                                    <h4>Register a new account</h4>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Email*"
                                                    type="email"
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Username*"
                                                    type="text"
                                                    value={username}
                                                    onChange={handleUsernameChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Password*"
                                                    type="password"
                                                    value={password}
                                                    onChange={handlePasswordChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Repeat Password*"
                                                    type="password"
                                                    value={repeatPassword}
                                                    onChange={handleRepeatPasswordChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {warning && (
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="form-group">
                                                    <p style={{ color: 'red' }}>{warning}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="col-md-12">
                                        <div className="row">
                                            <button type="submit">Sign up</button>
                                        </div>
                                    </div>
                                    <p className="link-bottom">
                                        Are you a member? <a href="#">Login now</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
