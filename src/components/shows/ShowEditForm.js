import React, { Component } from "react";
import ShowManager from "../../modules/ShowManager";
import show from './NewShowCard'
// import "./AnimalForm.css"

class ShowEditForm extends Component {
  //set the initial state
  state = {
    name: "",
    date: "",
    actOne:"",
    actTwo:"",
    actThree:'',
    venue: "",
    loadingStatus: true,
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
      bandOne: this.state.firstAct,
      bandTwo: this.state.secondAct,
      bandThree: this.state.thirdAct,
      venue: this.state.venue,
    };

    ShowManager.update(editedShow).then(() =>
      this.props.history.push("shows")
    );
  };

  componentDidMount() {
    ShowManager.getOne(this.props.match.params.showId).then(shows => {
        this.setState({
          showName: show.name,
          date: show.date,
          actOne: show.bandOne,
          actTwo: show.bandTwo,
          actThree: show.bandThree,
          venue: show.Venue,
          loadingStatus: false,
        });
    });
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="showName">Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="showName"
                placeholder="Show name"
              />
                <label htmlFor="bandOne">First Act</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="firstAct"
                placeholder="First Act"
              />
                 <label htmlFor="bandTwo">Second Act</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="secondAct"
                placeholder="Second Act"
              />
                 <label htmlFor="bandThree">Third Act</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="thirdAct"
                placeholder="Third Act"
              />

              <label htmlFor="date">Date</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="date"
                placeholder="Date"
              />
              <label htmlFor="venue">Venue</label>
                 <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="venue"
                placeholder="Venue"
              />

            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingShow}
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default ShowEditForm