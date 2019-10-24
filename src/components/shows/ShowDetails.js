import React, { Component } from "react";
import ShowManager from "../../modules/ShowManager";
import UserShowManager from "../../modules/UserShowManager";
import "../ShowShare.css";

class ShowDetails extends Component {
  //set the initial state
  state = {
    showName: "",
    date: "",
    acts: [],
    actId: "",
    venues: [],
    venueId: "",
    attendingUsers: [],
    loadingStatus: false
  };
  // here is the code for the attending button

  constructNewUserShow = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const userShow = {
      showId: this.props.match.params.showId,
      userId: localStorage.getItem("credentials")
    };

    // Create the show and redirect user back to individual show card
    UserShowManager.post(userShow).then(() =>
      this.props.history.push("/shows/")
    );
  };

  // this will be the code to find usershows

  componentDidMount() {
    console.log("ShowDetail: ComponentDidMount");
    //get(id) from ShowManager and hang on to that data; put it into state
    ShowManager.getOne(this.props.match.params.showId).then(show => {
      console.log(show);
      this.setState({
        name: show.name,
        date: show.date,
        actId: show.actId,
        actName: show.act.name,
        venueName: show.venue.name,
        venueId: show.venueId,
        attendingUsers: [],
        loadingStatus: false
      });
    });
    UserShowManager.getAttendingUsers(this.props.match.params.showId).then(
      userShow => {
        console.log(
          userShow,
          "this is the UserName of who is coming to the show"
        );
        this.setState({ attendingUsers: userShow });
      }
    );
  }

  render() {
    console.log("rendering");

    if (
      this.state.attendingUsers.some(
        user => user.userId === localStorage.getItem('credentials')
      )
    ) {
      console.log("Users Going found inside the array.");
    }
    else {
        console.log("These are not the users going")
    }
    return (
      <div className="container-cards">
        <div className="card">
          <div className="card-content">
            <picture></picture>
            <h3 className="card-title">{this.state.name}</h3>
            <h4>{this.state.actName} @</h4>
            <h4>{this.state.venueName}</h4>
            <p>{this.state.date}</p>
            
            <button onClick={this.constructNewUserShow}>
              Attending Button
            </button>
            <p>
              Users Attending:
              <br></br>
              {this.state.attendingUsers.map(singleUserAttending => (
                <span key={singleUserAttending.id}>
                  <br></br>
                  {singleUserAttending.user.name}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowDetails;
