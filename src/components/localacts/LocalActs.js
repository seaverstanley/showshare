import React, { Component } from 'react'
import { Link } from "react-router-dom"
class LocalActs extends Component {
  render() {
    return (
      <address>
        This is the Local Acts page for ShowShare, this is where you will see a list of all the local bands!
        <br />Come To Huntington!
        <Link to={`/ActCard`}><button className="btn btn-success">Add An Act!</button></Link>
      </address>
    )
  }
}

export default LocalActs