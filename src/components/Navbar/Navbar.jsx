import React from 'react';
import './Navbar.css';
export default function Navbar() {
  return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light px-3 shadow-sm mb-5 bg-body rounded ">
          <div className="container-fluid">
          <img className="navbar-brand" height={33} src="https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg"/>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="d-flex justify-content-between navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active fw-bold" aria-current="page" href="#">NEW CARS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active fw-bold" href="#">USED CARS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active fw-bold" href="#">REVIEWS & NEWS</a>
                </li>
              </ul>
              
          </div>
          <form className="d-flex ">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              <ul className="d-flex justify-content-around navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <a className="nav-link active" href="#"> 
                  <i className="fas fa-map-marker-alt fa-lg"></i>
                </a>
              </li>
              <li className="nav-link active"className="nav-item px-1">
                <a className="nav-link active" href="#">
                  <i className="fas fa-language fa-lg"></i>
                </a>
              </li>
              <li className="nav-item ps-2">
                <a className="nav-link active" href="#"> 
                  <i className="fas fa-user fa-lg"></i>
                </a>
              </li>
              
            </ul>
        </div>
      </nav>
    </div>

  );
}
