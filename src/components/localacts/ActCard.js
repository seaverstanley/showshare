import React, { Component } from "react";




class ActCard extends Component {




    render() {
        return (
            <div className="card">
                <div className="card-body">

                    <h3 className="card-title">
                        {this.props.actProp.name}</h3>
                        <h4>{this.props.actProp.genre}</h4>
                   


                </div>
            </div>
        );
    }



}


export default ActCard;
