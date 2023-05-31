import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


function Home(props) {
    return (
        <>
        <Navbar />

        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={require('./img/pharmacist hero.jpg')} className="d-block w-100 opacity-50" style={{ height: 527 }} alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Welcome to the pharmacy</h5>
                <p>There are qualified doctors to help you</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={require('./img/doctor-of-pharmacy.jpg')}className="d-block w-100 opacity-50" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Welcome to the pharmacy</h5>
                <p>There are qualified doctors to help you</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={require('./img/pharmacist2.jpg')} className="d-block w-100 opacity-50" style={{ height: 527 }} alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Welcome to the pharmacy</h5>
                <p>There are qualified doctors to help you</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="bi-arrow-left-circle-fill fs-1 text-body"
              aria-hidden="true"
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="bi-arrow-right-circle-fill fs-1 text-body"
              aria-hidden="true"
            />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      <h5 className="Ask fs-1 fw-bold text-center p-3">Ask a doctor</h5>

        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="card">
                <img src={require('./img/young-woman.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Sally</h5>
                  <p className="card-text">
                    You can message me now to solve your problem
                  </p>
                  <a href="#" className="btn btn-primary">
                    Message
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="card">
                <img src={require('./img/img2.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Mohamed </h5>
                  <p className="card-text">
                    You can message me now to solve your problem
                  </p>
                  <a href="#" className="btn btn-primary">
                    Message
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="card">
                <img src={require('./img/img3.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Layla</h5>
                  <p className="card-text">
                    You can message me now to solve your problem
                  </p>
                  <a href="#" className="btn btn-primary">
                    Message
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4 ">
              <div className="card">
                <img src={require('./img/img4.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Anthony </h5>
                  <p className="card-text">
                    You can message me now to solve your problem
                  </p>
                  <a href="#" className="btn btn-primary">
                    Message
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="card">
                <img src={require('./img/img5.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Griezman</h5>
                  <p className="card-text">
                    You can message me now to solve your problem
                  </p>
                  <a href="#" className="btn btn-primary">
                    Message
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="card">
                <img src={require('./img/img6.jpg')}  className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Paolo</h5>
                  <p className="card-text">
                    You can message me now to solve your problem
                  </p>
                  <a href="#" className="btn btn-primary">
                    Message
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="card">
                <img src={require('./img/img7.jpg')}  className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Ali</h5>
                  <p className="card-text">
                    You can message me now to solve your problem
                  </p>
                  <a href="#" className="btn btn-primary">
                    Message
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12  mt-4 ">
              <div className="card">
                <img src= {require('./img/img8.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Mohamed</h5>
                  <p className="card-text">
                    You can message me now to solve your problem
                  </p>
                  <a href="#" className="btn btn-primary">
                    Message
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h5 className="tips p-5 text-center">Doctor tips</h5>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="card border-light mb-3">
                <div className="card-header">Doctor</div>
                <div className="card-body">
                  <h5 className="card-title">Ahmed</h5>
                  <p className="card-text">never give up.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="card border-light mb-3">
                <div className="card-header">Doctor</div>
                <div className="card-body">
                  <h5 className="card-title">Ziad</h5>
                  <p className="card-text">never give up.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="card border-light mb-3">
                <div className="card-header">Doctor</div>
                <div className="card-body">
                  <h5 className="card-title">Ali</h5>
                  <p className="card-text">never give up.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="card border-light mb-3">
                <div className="card-header">Doctor</div>
                <div className="card-body">
                  <h5 className="card-title">Meena</h5>
                  <p className="card-text">never give up.</p>
                </div>
              </div>
            </div>
            <h5 className="tips p-5 text-center">Collection</h5>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12  mt-4 ">
              <div className="card">
                <img src={require('./img/img9.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Medical consultation</h5>
                  <p className="card-text">Click on see more to see what we have</p>
                  <a href="Help.HTML" className="btn btn-primary" target="_blank">
                    See more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12  mt-4 ">
              <div className="card">
                <img src={require('./img/img10.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Therapeutic medicines</h5>
                  <p className="card-text">Click on see more to see what we have</p>
                  <a
                    href="Medication.HTML"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    See more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12  mt-4 ">
              <div className="card">
                <img src={require('./img/img11.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">makeup</h5>
                  <p className="card-text">Click on see more to see what we have</p>
                  <a href="Beauty.HTML" className="btn btn-primary" target="_blank">
                    See more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />  
        </>
    );
}

export default Home;