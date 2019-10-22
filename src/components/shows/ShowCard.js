import React, { Component } from "react";
import { Link } from "react-router-dom";
import ShowManager from "../../modules/ShowManager"
// import ShowManager from "../../modules/ShowManager";


class ShowCard extends Component


{

    // deleteShowProp = (id) => {
    //     ShowManager.delete(id)
    //       .then(ShowManager.getAll)
    //       .then(parsedShows => {
    //           this.setState({
    //               tasks: parsedShows

    //           })
    //           })
    //           .then(()=>
    //         this.props.history.push("/shows")
    //           )}


  render() {
    return (
      <div className="card">
        <div className="card-content">

          <h3>
             {this.props.showProp.name}
          </h3>
          <h4> {this.props.showProp.act.name}</h4>
          <h4> {this.props.showProp.venue.name}</h4>
          <p> {this.props.showProp.date}</p>


          <Link to={`/shows/${this.props.showProp.id}/edit`}>
            <button className="btn btn-success">Edit</button>
          </Link>
          <Link to="/shows" refresh ="true">
          <button type="checkbox" className ="btn btn-danger"
            onClick={() => this.props.deleteShowProp(this.props.showProp.id)}
          >
            Delete Show?
          </button>
          </Link>

        </div>
      </div>
    );
  }



}

export default ShowCard;
