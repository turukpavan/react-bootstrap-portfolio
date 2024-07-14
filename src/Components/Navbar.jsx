import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react'

const Navbar = () => {
  return (
    <nav className="  navbar navbar-dark  navbar-expand-lg bg-color  position-fixed  ">
    <div className="container-fluid">
      <a className=" text-violate text-decoration-none fs-3 fw-bold" href="#home">Portfolio</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div className="collapse text-center  vw-100  text-light navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav ms-auto bg-color">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#Hero">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#About">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Contact">Contact</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar
