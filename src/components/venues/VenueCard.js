import React, { Component } from "react";




class VenueCard extends Component {




    render() {
        return (
            <div className="card">
                <div className="card-body">

                    <h3 className="card-title">
                        {this.props.venueProp.name}</h3>
                        <p><span className="card-image"><img className="image" src={this.props.venueProp.image} alt="photo"></img></span></p>

                        <h5>{this.props.venueProp.address}</h5>



                </div>
            </div>
        );
    }



}


export default VenueCard;
