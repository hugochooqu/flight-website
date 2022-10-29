import React from "react";

const Navigation = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-none">
  <a className="navbar-brand" href="#">
    Holidays
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ms-5">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Holiday Packages
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Flight Schedule
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Manage Bookings
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Account Settings
        </a>
      </li>
     
    </ul>
    <ul className="navbar-nav ms-5">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Register
        </a>
      </li>

      <button className="btn btn-sm btn-dark" >Sign Up</button>

    </ul>
  </div>
</nav>
    )
}

export default Navigation