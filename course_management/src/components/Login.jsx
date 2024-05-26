import React from 'react'

function Login() {
    return (
        <div>
            <div className="login-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <form action="#" id="login-form" className="white-popup-block">
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
                                                    placeholder="Email*"
                                                    type="email"
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
                                                    type="text"
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
                                        Not a member yet? <a href="#">Register now</a>
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