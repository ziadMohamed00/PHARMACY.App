import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Beauty(props) {
    return (
        <>
        <Navbar/>
     
     <div className="container-fluid">
        <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card">
                <img src={require('./img/img11.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">makeup</h5>
                <p className="card-text">Product definition here</p>
                <form className="d-flex justify-content-around">
                    <b className="mt-1">500 L.E</b>
                    <div>
                    <i className="bi bi-cart-fill fs-4" />
                    <span className="" onclick="inputPlse(1)">
                        <i className="bi bi-plus" />
                    </span>
                    <input
                        type="number"
                        defaultValue={0}
                        id="input1"
                        className="text-center border-0"
                        style={{ width: 40 }}
                        min={0}
                        max={20}
                    />
                    <span className="" onclick="inputMin(1)">
                        <i className="bi bi-dash" />
                    </span>
                    </div>
                </form>
                <button
                    type="button"
                    className="btncbea bg-success-subtle p-2 border-0 rounded-2"
                >
                    Buy
                </button>
                </div>
            </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card">
                <img src={require('./img/img11.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">makeup</h5>
                <p className="card-text">Product definition here</p>
                <form className="d-flex justify-content-around">
                    <b className="mt-1">500 L.E</b>
                    <div>
                    <i className="bi bi-cart-fill fs-4" />
                    <span className="" onclick="inputPlse(2)">
                        <i className="bi bi-plus" />
                    </span>
                    <input
                        type="number"
                        defaultValue={0}
                        id="input2"
                        className="text-center border-0"
                        style={{ width: 40 }}
                        min={0}
                        max={20}
                    />
                    <span className="" onclick="inputMin(2)">
                        <i className="bi bi-dash" />
                    </span>
                    </div>
                </form>
                <button
                    type="button"
                    className="btncbea bg-success-subtle p-2 border-0 rounded-2"
                >
                    Buy
                </button>
                </div>
            </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card">
                <img src={require('./img/img11.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">makeup</h5>
                <p className="card-text">Product definition here</p>
                <form className="d-flex justify-content-around">
                    <b className="mt-1">500 L.E</b>
                    <div>
                    <i className="bi bi-cart-fill fs-4" />
                    <span className="" onclick="inputPlse(3)">
                        <i className="bi bi-plus" />
                    </span>
                    <input
                        type="number"
                        defaultValue={0}
                        id="input3"
                        className="text-center border-0"
                        style={{ width: 40 }}
                        min={0}
                        max={20}
                    />
                    <span className="" onclick="inputMin(3)">
                        <i className="bi bi-dash" />
                    </span>
                    </div>
                </form>
                <button
                    type="button"
                    className="btncbea bg-success-subtle p-2 border-0 rounded-2"
                >
                    Buy
                </button>
                </div>
            </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4 ">
            <div className="card">
                <img src={require('./img/img11.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">makeup</h5>
                <p className="card-text">Product definition here</p>
                <form className="d-flex justify-content-around">
                    <b className="mt-1">500 L.E</b>
                    <div>
                    <i className="bi bi-cart-fill fs-4" />
                    <span className="" onclick="inputPlse(4)">
                        <i className="bi bi-plus" />
                    </span>
                    <input
                        type="number"
                        defaultValue={0}
                        id="input4"
                        className="text-center border-0"
                        style={{ width: 40 }}
                        min={0}
                        max={20}
                    />
                    <span className="" onclick="inputMin(4)">
                        <i className="bi bi-dash" />
                    </span>
                    </div>
                </form>
                <button
                    type="button"
                    className="btncbea bg-success-subtle p-2 border-0 rounded-2"
                >
                    Buy
                </button>
                </div>
            </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card">
                <img src={require('./img/img11.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">makeup</h5>
                <p className="card-text">Product definition here</p>
                <form className="d-flex justify-content-around">
                    <b className="mt-1">500 L.E</b>
                    <div>
                    <i className="bi bi-cart-fill fs-4" />
                    <span className="" onclick="inputPlse(5)">
                        <i className="bi bi-plus" />
                    </span>
                    <input
                        type="number"
                        defaultValue={0}
                        id="input5"
                        className="text-center border-0"
                        style={{ width: 40 }}
                        min={0}
                        max={20}
                    />
                    <span className="" onclick="inputMin(5)">
                        <i className="bi bi-dash" />
                    </span>
                    </div>
                </form>
                <button
                    type="button"
                    className="btncbea bg-success-subtle p-2 border-0 rounded-2"
                >
                    Buy
                </button>
                </div>
            </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card">
                <img src={require('./img/img11.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">makeup</h5>
                <p className="card-text">Product definition here</p>
                <form className="d-flex justify-content-around">
                    <b className="mt-1">500 L.E</b>
                    <div>
                    <i className="bi bi-cart-fill fs-4" />
                    <span className="" onclick="inputPlse(6)">
                        <i className="bi bi-plus" />
                    </span>
                    <input
                        type="number"
                        defaultValue={0}
                        id="input6"
                        className="text-center border-0"
                        style={{ width: 40 }}
                        min={0}
                        max={20}
                    />
                    <span className="" onclick="inputMin(6)">
                        <i className="bi bi-dash" />
                    </span>
                    </div>
                </form>
                <button
                    type="button"
                    className="btncbea bg-success-subtle p-2 border-0 rounded-2"
                >
                    Buy
                </button>
                </div>
            </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4">
            <div className="card">
                <img src={require('./img/img11.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">makeup</h5>
                <p className="card-text">Product definition here</p>
                <form className="d-flex justify-content-around">
                    <b className="mt-1">500 L.E</b>
                    <div>
                    <i className="bi bi-cart-fill fs-4" />
                    <span className="" onclick="inputPlse(7)">
                        <i className="bi bi-plus" />
                    </span>
                    <input
                        type="number"
                        defaultValue={0}
                        id="input7"
                        className="text-center border-0"
                        style={{ width: 40 }}
                        min={0}
                        max={20}
                    />
                    <span className="" onclick="inputMin(7)">
                        <i className="bi bi-dash" />
                    </span>
                    </div>
                </form>
                <button
                    type="button"
                    className="btncbea bg-success-subtle p-2 border-0 rounded-2"
                >
                    Buy
                </button>
                </div>
            </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4 ">
            <div className="card">
                <img src={require('./img/img11.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">makeup</h5>
                <p className="card-text">Product definition here</p>
                <form className="d-flex justify-content-around">
                    <b className="mt-1">500 L.E</b>
                    <div>
                    <i className="bi bi-cart-fill fs-4" />
                    <span className="" id="" onclick="inputPlse(8)">
                        <i className="bi bi-plus" />
                    </span>
                    <input
                        type="number"
                        defaultValue={0}
                        id="input8"
                        className="text-center border-0"
                        style={{ width: 40 }}
                        min={0}
                        max={20}
                    />
                    <span className="" onclick="inputMin(8)">
                        <i className="bi bi-dash" />
                    </span>
                    </div>
                </form>
                <button
                    type="button"
                    className="btncbea bg-success-subtle p-2 border-0 rounded-2"
                >
                    Buy
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>

        <Footer/>
        </>
    );
}

export default Beauty;