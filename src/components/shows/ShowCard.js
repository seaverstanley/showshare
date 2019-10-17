import React, { Component } from "react";
import { Link } from "react-router-dom";

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">

          <h3>
            Name: {this.props.showProp.name}
          </h3>
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

export default AnimalCard;
