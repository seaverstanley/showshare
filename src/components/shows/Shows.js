import React, { Component } from "react";
//import the components we will need
import ShowCard from "./ShowCard";
import ShowManager from "../../modules/ShowManager";

class AnimalList extends Component {
  //define what this component needs to render
  state = {
    shows: []
  };

  componentDidMount() {
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from ShowManager and hang on to that data; put it in state
    ShowManager.getAll().then(showsFromDatabase => {
      console.log(showsFromDatabase);
      this.setState({
        shows: showsFromDatabase
      });
    });
  }

  render() {
    console.log("SHOW LIST: Render");

    return (
      <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/shows/new");
            }}
          >
            New Show!
          </button>
        </section>
        <div className="container-cards">
          {this.state.shows.map(singleShow => (
            <ShowCard key={singleShow.name} showProp={singleShow} />
          ))}
        </div>
      </>
    );
  }
}

export default AnimalList;