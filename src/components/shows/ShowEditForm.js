import React, { Component } from "react";
import VenueManager from "../../modules/VenueManager";
import ActManager from "../../modules/ActManager";
import ShowManager from '../../modules/ShowManager'

class ShowEditForm extends Component {
    //set the initial state
    state = {
        showName: "",
        date: "",
        acts: [],
        actId: "1",
        venues: [],
        venueId: "1",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    updateExistingShow = evt => {
        evt.preventDefault();
        this.setState({ loadingStatus: true });
        const editedShow = {
            id: this.props.match.params.showId,
            name: this.state.showName,
            date: this.state.date,
            actId: +this.state.actId,
            venueId: +this.state.venueId,
             // convert to number
        };

        ShowManager.update(editedShow).then(() =>
            this.props.history.push("/shows")
        );
    };

    componentDidMount() {
        // Get all acts and venues from db
        ActManager.getAll().then(parsedActs => {
            console.log("these should be all acts from db", parsedActs)
            // Take acts from db and set them to state
            this.setState({ acts: parsedActs })


            // Get all acts and venues from db
            VenueManager.getAll().then(parsedVenues => {
                console.log("these should be all Venues from db", parsedVenues)
                // Take Venues from db and set them to state
                this.setState({ venues: parsedVenues })
            })


        })

    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="showName">Show Name</label>
                            <br></br>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="showName"
                                placeholder="show name"

                            />
                            <br></br>
                            <label>Acts</label>
                            <select
                                className="form-control"
                                id="actId"
                                value={this.state.actId}
                                onChange={this.handleFieldChange}
                            >
                                {this.state.acts.map(act => (
                                    <option key={act.id} value={act.id}>
                                        {act.name}
                                    </option>
                                ))}
                            </select>
                            <br></br>
                            <label>Venues</label>
                            <select
                                className="form-control"
                                id="venueId"
                                value={this.state.venueId}
                                onChange={this.handleFieldChange}
                            >
                                {this.state.venues.map(venue => (
                                    <option key={venue.name} value={venue.id}>
                                        {venue.name}
                                    </option>
                                ))}
                            </select>


                            <br></br>
                            <label htmlFor="date">Date</label>
                            <br></br>
                            <input
                                type="date"
                                required
                                onChange={this.handleFieldChange}
                                id="date"
                                placeholder="Date"
                            />
                            <br></br>
                        </div>
                        <div className="alignRight">
                            <br></br>
                            <button link="/shows" className="btn btn-success"
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.updateExistingShow}>

                                Submit
              </button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default ShowEditForm;
