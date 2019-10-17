

import React, { Component } from 'react'



class LocalActs extends Component {
  render() {
    return (
      <address>
        This is the local acts for ShowShare!
        <br />Come To Huntington!
        <Link to={`/ActCard`}><button className="btn btn-success">Add An Act!</button></Link>
      </address>
    )
  }
}

export default LocalActs