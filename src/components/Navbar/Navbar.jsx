import React from 'react';
import './Navbar.css';
export default function Navbar() {
  return (
      <div>
      <div class="shadow-sm mb-5 bg-body rounded">

    <nav className="navbar px-3 navbar-expand-lg navbar-light">
        <div className="container-fluid">
        <img
              className="navbar-brand"
              height={33}
              src="https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg"
            />
            
            <div className=" collapse navbar-collapse" id="navbarSupportedContent">

               
                <ul className="d-flex justify-content-around navbar-nav me-auto mb-2 mb-lg-0">
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

                
                
                
        
      <form className="d-flex w-45 pe-5">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
</div>

  );
}
