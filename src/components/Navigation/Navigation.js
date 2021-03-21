import React, { Component, Fragment } from 'react'
import {Link} from "react-router-dom"
import './Navigation.css'

class Navigation extends Component {

  render() {
    return (
      <Fragment>
        <div className="mainNavbar">
          <nav id="main-nav" className="navbar navbar-expand-lg">
            <Link className="navbar-brand navBrand" id="scan-item" to="/">Nearby</Link>
            <button className="navbar-toggler favIcon" type="button" data-toggle="collapse"   data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon favIcon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            <div className="form-inline my-2 my-lg-0">
              <Link
                to="/history">
                <button className="btn btn-outline-primary btnNav navbar-brand">History</button>
              </Link>
            </div>
          </div>
          </nav>
        </div>
      </Fragment>
    )
  }
}

export default Navigation

