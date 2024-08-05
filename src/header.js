import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import HeadLogo from "./images/Logo_Animations.webp";
import "./Header.css"; 
import { useAuth } from "./AuthContext";
import img1 from "./images/2.png";
import img2 from "./images/3.png";

function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogoutClick = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src={HeadLogo}
                alt="HeadLogo"
                className="img-fluid logo-img"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/review">
                    Review
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                {isAuthenticated ? (
                  <li className="nav-item">
                    <button
                      className="btn btn-outline-primary ms-3"
                      onClick={handleLogoutClick}
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      <button className="btn btn-primary ms-3">Login</button>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="container mt-5">
        <div className="banner-head text-center">
          <h2>Header Banner</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nemo asperiores alias similique ducimus quasi quidem atque neque! Et
            necessitatibus quidem animi laboriosam, quasi sed libero consequatur
            neque maxime excepturi?
          </p>
        </div>
        <div className="position-relative py-80">
          <div className="row">
            <div className="col-12 col-md-7 mb-4">
              <img src={img1} alt="img1" className="img-fluid" />
            </div>
            <div className="col-12 col-md-7 mb-4 position-absolute img2-banner">
              <img src={img2} alt="img2" className="img-fluid" />
            </div>
          </div>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nemo asperiores alias similique ducimus quasi quidem atque neque! Et
            necessitatibus quidem animi laboriosam, quasi sed libero consequatur
            neque maxime excepturi?
          </p>
      </div>
    </>
  );
}

export default Header;
