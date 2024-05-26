import React, { useState } from 'react'
// import { unstable_HistoryRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        if (!username || !password) {
            toast.error('Please enter username and password');
            return;
        }


        try {
            console.log("Bat dau login")
            const response = await axios.post('http://localhost:3000/users/login', {
                username: username,
                password: password
            });
            if (response.data.success) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('accountid', response.data.accountid);
                localStorage.setItem('admin', response.data.admin);
                console.log("Da login")

                toast.success('Login successfully');
                // navigate('/home')
                window.location.href = '/home';

            } else {
                toast.error('Invalid username or password');
            }
        } catch (error) {
            toast.error('Invalid username or password', error);

        }
    };
    return (
        <div>
            <div className="login-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <form onSubmit={handleLogin} id="login-form" className="white-popup-block">
                                <div className="col-md-4 login-social">
                                    <h4>Login with social</h4>
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
                                    <h4>login to your registered account!</h4>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    placeholder="Username*"
                                                    type="text"
                                                    onChange={(e) => setUsername(e.target.value)}
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
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <label htmlFor="login-remember">
                                                <input type="checkbox" id="login-remember" />
                                                Remember Me
                                            </label>
                                            <a title="Lost Password" href="#" className="lost-pass-link">
                                                Lost your password?
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <button type="submit">Login</button>
                                        </div>
                                    </div>
                                    <p className="link-bottom">
                                        Not a member yet? <Link to={"/register"}>Register now</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login