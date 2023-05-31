import './index.css';

  
function Navbar() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold p-3 fs-3 text-info-emphasis" href="/Home">
            <i className="bi-bookmark-heart" />
            PHARMACY
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Medication">
                  Medication
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Beauty">
                  Beauty
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Login">
                  Login/sign in
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="/Help">
                  Help
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn" type="submit">
                <i className="bi bi-search" />
              </button>
              <input
                className="form-control me-2"
                name="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
