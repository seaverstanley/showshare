import React, { Component } from 'react';
import ShowManager from '../../modules/ShowManager';

class ShowDetail extends Component {

  state = {
    showName: "",
    date: "",
    acts: [],
    actId: "1",
    venues: [],
    venueId: "1",
    loadingStatus: false
};

    handleDelete = () => {
        console.log("this is props", this.props)
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({loadingStatus: true})
        ShowManager.delete(this.props.showId)
        .then(() => this.props.history.push("/shows"))
    }

    componentDidMount(){
        console.log("ShowDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to that data; put it into state
        ShowManager.getOne(this.props.Id)
        .then((show) => {
            this.setState({
                name: show.name,
                date: show.date,
                loadingStatus: false
            });
        });
    }

    render() {
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.show}</span></h3>
            <p>Date: {this.state.date}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Show?</button>
          </div>
        </div>
      );
    }
}

export default ShowDetail;