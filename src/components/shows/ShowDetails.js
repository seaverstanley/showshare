import React, { Component } from 'react';
import ShowManager from '../../modules/ShowManager';
import UserShowManager from '../../modules/UserShowManager'
import '../ShowShare.css'



class ShowDetails extends Component {

        //set the initial state
        state = {
            showName: "",
            date: "",
            acts: [],
            actId: "",
            venues: [],
            venueId: "",
            loadingStatus: false
        };

    componentDidMount(){
        console.log("ShowDetail: ComponentDidMount");
        //get(id) from ShowManager and hang on to that data; put it into state
        ShowManager.getOne(this.props.showId)
        .then((show) => {
            console.log(show)
            this.setState({
                name: show.name,
                date: show.date,
                actId:show.actId,
                actName: show.act.name,
                venueName: show.venue.name,
                venueId: show.venueId,
                loadingStatus: false
            });
        })
        UserShowManager.getAttendingUsers(this.props.showId)
        .then((userShow)=>{
            console.log(userShow, "this is the UserName of who is coming to the show")
            this.setState({
                userName: userShow.name
            })

        })
    }

    render() {
      return (
        <div className="container-cards">
        <div className="card">
          <div className="card-content">
            <picture>
            </picture>
            <h3 className="card-title">{this.state.name}</h3>
            <h4>
                {this.state.actName} @
            </h4>
            <h4>{this.state.venueName}</h4>
            <p>{this.state.date}</p>
            <button className="btn btn-primary">Attending?</button>
            <p>Users Attending:
                {this.state.userName}
            </p>
          </div>
        </div>
        </div>
      );
    }
}

export default ShowDetails;