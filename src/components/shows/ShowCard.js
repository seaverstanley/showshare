import React, { Component } from "react";
import { Link } from "react-router-dom";



class ShowCard extends Component {




    render() {
        return (
            <div className="card">
                <div className="card-body">

                    <h3 className="card-title">
                        {this.props.showProp.name}
                    </h3>
                    <h4 className="card-subtitle mb-2 text-muted"> {this.props.showProp.act.name}</h4>
                    <h4> {this.props.showProp.venue.name}</h4>
                    <p className="card-text"> {this.props.showProp.date}</p>


                    <Link to={`/shows/${this.props.showProp.id}/edit`}>
                        <button className="btn btn-success">Edit</button>
                    </Link>
                    <button type="checkbox" className ="btn btn-danger"
            onClick={() => this.props.deleteShowProp(this.props.showProp.id)}
          >
            Delete Show?
          </button>


                </div>
            </div>
        );
    }



}

export default ShowCard;
