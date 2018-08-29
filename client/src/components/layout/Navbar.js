import React, { Component } from "react";
import "./Layout.css";
class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img
            class="img-fluid"
            src={process.env.PUBLIC_URL + "/assets/logo.svg"}
            alt=""
            style={{ heigth: "50px;" }}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto mr-5">
            <li class="nav-item active p-2">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item p-2">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item p-2">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
