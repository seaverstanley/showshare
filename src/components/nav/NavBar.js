import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'


class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">ShowShare!<br />
        </h1>
        <nav className="navbar navbar">
          <ol className="container">
            <li><Link className="nav-link" to="/home">Home</Link></li>
            <li><Link className="nav-link" to="/localacts">Local Acts</Link></li>
            <li><Link className="nav-link" to="/venues">Venues</Link></li>
            <li><Link className="nav-link" to="/shows">Shows</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
            <Link to={`/auth/LoginCard`}><button className="btn btn-success">Sign in</button></Link>
        <Link to={`/auth/RegisterCard`}><button className="btn btn-primary">Sign up</button></Link>
        <Link to ={`/home`}><button className="btn btn-danger">Logout</button></Link>
          </ol>
        </nav>


      </header>
    )
  }
}

export default NavBar;