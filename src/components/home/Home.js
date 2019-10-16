
import React, { Component } from 'react'
import "./Home.css"
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <address>
        This is the home page for ShowShare!
        <br />Come To Huntington!
        <br></br>
        <Link to={`/auth`}><button className="btn btn-primary">Add a Show!</button></Link>   </address>
    )
  }
}

export default Home