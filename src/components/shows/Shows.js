

import React, { Component } from 'react'
import { Link } from "react-router-dom"
import ShowCard from './ShowCard'
import ShowManager from '../../modules/ShowManager'

class ShowList extends Component {
  //define what this component needs to render
  state = {
    shows: []
  };

  deleteShowProp = (id) => {
    ShowManager.delete(id)
      .then(ShowManager.getAll)
      .then(parsedShows => {
          this.setState({
              shows: parsedShows

          })
          })
          .then(()=>
        this.props.history.push("/shows")
          )}




  componentDidMount() {
    console.log("SHOW LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    ShowManager.getAll().then(showsFromDatabase => {
      console.log(showsFromDatabase);
      this.setState({
        shows: showsFromDatabase
      });
    });
  }

  render() {
    console.log("SHOW  LIST: Render");

    return (
      <>
        <section className="section-content">
        <Link to={`/NewShow`}><button className="btn btn-success">Add A Show!</button></Link>
        </section>
        <div className="container-cards">
          {this.state.shows.map(singleShow => (
            <ShowCard key={singleShow.id} deleteShowProp={this.deleteShowProp} showProp={singleShow} />

          ))}

        </div>
      </>
    );
  }
}

export default ShowList