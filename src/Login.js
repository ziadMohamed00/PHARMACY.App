import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Login(props) {
    return (
        <>
        <Navbar/>

            <div className="container p-5 bg-light mt-5 rounded-5 shadow ">
            <div className=" mb-3 col-12 d-flex me-3">
                <input
                type="FirstName"
                className="form-control me-3"
                placeholder="First Name"
                aria-label="firstname"
                />
                <input
                type="lastname"
                className="form-control"
                placeholder="Last Name"
                aria-label="lastname"
                />
            </div>
            <div className="col-12 mb-3 d-flex">
                <input
                type="password"
                className="form-control me-3"
                placeholder="password"
                aria-label="password"
                />
                <input
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="email"
                />
            </div>
            <div className="input-group  mb-3">
                <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                aria-label="number"
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Age</span>
                <input type="date" className="form-control" aria-label="age" />
            </div>
            <button
                type="button"
                className="loginbtn text-center border-0 bg-success-subtle rounded-5 shadow-sm p-3"
            >
                submit
            </button>
            </div>

        <Footer/>
        </>
    );
}

export default Login;