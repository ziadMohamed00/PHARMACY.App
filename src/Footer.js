import React from 'react';

function Footer(props) {
    return (
        <footer className="footer mt-5">
  <div className="container-fluid">
    <div className="row">
      <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12 mb-5">
        <a
          className="navbar-brand fw-bold p-3 fs-3 text-info-emphasis"
          href="/"
        >
          <i className="bi-bookmark-heart" />
          PHARMACY
        </a>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-3 col-sm-12 mb-md-5">
        <a
          className="navbar-brand fw-bold p-3 fs-3 text-info-emphasis"
          href="/"
        >
          Links
        </a>
        <span className="li-foot d-block mx-4">
          <a className="d-block text-decoration-none" href="/">
            Home
          </a>
          <a className="d-block text-decoration-none" href="/Medication">
            Medication
          </a>
          <a className="d-block text-decoration-none" href="/Beauty">
            Beauty
          </a>
        </span>
      </div>
      <div className="col-xl-2 col-lg-4 col-md-3 col-sm-12">
        <a
          className="navbar-brand fw-bold p-3 fs-3 text-info-emphasis mb-5"
          href="/"
        >
          content
        </a>
        <span className="li-foot d-block mx-4">
          <a className="d-block text-decoration-none" href="/">
            Ask a doctor
          </a>
          <a className="d-block text-decoration-none" href="/">
            Doctor tips
          </a>
          <a className="d-block text-decoration-none" href="/">
            Collection
          </a>
        </span>
      </div>
      <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12  text-center">
        <a
          className=" fw-bold p-3 fs-3 text-info-emphasis text-decoration-none "
          href="/"
        >
          A Front End Developer <br />
        </a>
        <p className=" fs-4 fw-bold text-muted">Ziad Mohamed</p>
        <span className="li-foot d-block">
          <a
            className="fs-2 m-2"
            href="https://www.linkedin.com/in/ziad-mohamed-49aa12243/"
            target="_blank"
          >
            <i className="bi bi-linkedin" />
          </a>
          <a
            className="fs-2 m-2"
            href="https://github.com/ziadMohamed00"
            target="_blank"
          >
            <i className="bi bi-github" />
          </a>
        </span>
      </div>
    </div>
    <p className="text-center fw-lighter mt-5">Website design:2023</p>
  </div>
</footer>

    );
}

export default Footer;