import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-success">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Vegetable-Shop
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/companies">
                Companies
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Report
              </a>
            </li>
          </ul>
          <ul class="d-flex navbar-nav">
            <li class="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
