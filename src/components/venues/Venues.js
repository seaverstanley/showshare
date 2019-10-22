

import React, { Component } from 'react'
import VenueCard from './VenueCard'
import VenueManager from '../../modules/VenueManager'

class VenueList extends Component {
  //define what this component needs to render
  state = {
    venues: []
  };

  deleteVenueProp = (id) => {
    VenueManager.delete(id)
      .then(VenueManager.getAll)
      .then(parsedVenues => {
          this.setState({
              venues: parsedVenues

          })
          })
          .then(()=>
        this.props.history.push("/venues")
          )}




  componentDidMount() {
    console.log("SHOW LIST: ComponentDidMount");
    //getAll from ActManager and hang on to that data; put it in state
    VenueManager.getAll().then(venuesFromDatabase => {
      console.log(venuesFromDatabase);
      this.setState({
        venues: venuesFromDatabase
      });
    });
  }

  render() {
    console.log("VENUE LIST: Render");

    return (
      <>
        <section className="section-content">
        </section>
        <div className="container-cards">
          {this.state.venues.map(singleVenue => (
            <VenueCard key={singleVenue.id} venueProp={singleVenue} />

          ))}

        </div>
      </>
    );
  }
}

export default VenueList;