import React, { Component } from "react";
import ShowManager from "../../modules/ShowManager";
import ActManager from '../../modules/ActManager'
import VenueManager from '../../modules/VenueManager'
import "./NewShowCard.css"
import 'react-dropdown/style.css'


class ShowForm extends Component {
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
        console.log("this is event.target.id", evt.target.id);
        console.log("this is event.target.value", evt.target.value);
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        console.log("this is state to change", stateToChange);
        this.setState(stateToChange);
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



    /*  Local method for validation, set loadingStatus, create show     object, invoke the ShowManager post method, and redirect to the full animal list
     */
    constructNewShow = evt => {
        evt.preventDefault();
        if (this.state.showName === "" || this.state.date === "") {
            window.alert("Please input a show name and date");
        } else {
            this.setState({ loadingStatus: true });
            const show = {
                name: this.state.showName,
                date: this.state.date,
                actId: +this.state.actId,
                venueId: +this.state.venueId, // convert to number
            };

            // Create the show and redirect user to show list
            ShowManager.post(show).then(() =>
                this.props.history.push("/shows")
            );
        }
    };



    render() {
        return (
            <>
              <div className="card">
                <div className="card-body">
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="showName" className="card-title">{this.state.showName}</label>
                            <br></br>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="showName"
                                value={this.state.showName}
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

                            <br></br>
                            <button

                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewShow}
                            >
                                Submit
              </button>
                        </div>
                    </fieldset>
                </form>
                </div>
                </div>
            </>
        );
    }
}

export default ShowForm;