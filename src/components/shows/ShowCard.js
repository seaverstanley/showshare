import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserManager from '../../modules/UserManager'



class ShowCard extends Component {

state={
count:0
}


likeIncrements= ()=>{
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
    return newCount
}

    render() {
        return (
            <div className="card">
                <div className="card-body">

                    <h3 className="card-title">
                        {this.props.showProp.name}
                    </h3>
                    <h4 className="card-subtitle mb-2"> {this.props.showProp.act.name}</h4>
                    <h4> @ {this.props.showProp.venue.name}</h4>
                    <p className="card-subtitle mb-2 text-muted"> {this.props.showProp.date}</p>


                    <Link to={`/shows/${this.props.showProp.id}/edit`}>
                        <button className="btn btn-success">Edit</button>
                    </Link>
                    <button type="checkbox" className ="btn btn-danger"
            onClick={() => this.props.deleteShowProp(this.props.showProp.id)}
          >
            Delete Show?
          </button>
          <button className="btn btn-primary" onClick ={this.likeIncrements} >{this.state.count} Likes</button>


                </div>

                <br></br>
                <h5>Users Attending:</h5>
            </div>



        );
    }



}

export default ShowCard;
