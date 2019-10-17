import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShowCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Name:{" "}
            <span className="card-showname">{this.props.showProp.name}</span>
          </h3>
          <h4>First Act: {this.props.showProp.bandOne}</h4>
          <h5>Second Act: {this.props.showProp.bandTwo}</h5>
          <h5>Third Act: {this.props.showProp.bandThree}</h5>
          <p>Date: {this.props.showProp.date}</p>


          <Link to={`/shows/${this.props.showProp.id}`}>
            <button>Details</button>
          </Link>
          <Link to={`/shows/${this.props.showProp.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ShowCard;