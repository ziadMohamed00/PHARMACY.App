import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Help(props) {
    return (
        <>
        <Navbar />

        <div className="container p-5 bg-light mt-5 rounded-5 shadow">
        <div className=" mb-3 me-3">
            <p>what's the problem</p>
            <input type="text" className="form-control me-3" />
        </div>
        <button
            type="button"
            className="loginbtn text-center border-0 bg-success-subtle rounded-5 shadow-sm p-3"
        >
            submit
        </button>
        </div>


        <Footer />
        </>
    );
}

export default Help;