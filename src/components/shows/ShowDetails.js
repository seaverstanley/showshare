import React, { Component } from 'react';
import ShowManager from '../../modules/ShowManager';


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
        //get(id) from AnimalManager and hang on to that data; put it into state
        ShowManager.getOne(this.props.showId)
        .then((show) => {
            this.setState({
                name: show.name,
                date: show.date,
                actId:show.actId,
                venueId: show.venueId,
                loadingStatus: false
            });
        });
    }

    render() {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
            </picture>
            <h2>{this.state.name}</h2>
            <h3>
                {this.state.actId}
            </h3>
            <h3>{this.state.venueId}</h3>
            <p>{this.state.date}</p>
          </div>
        </div>
      );
    }
}

export default ShowDetails;