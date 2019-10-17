import React, { Component } from "react";
import ShowManager from "../../modules/ShowManager";
import show from './NewShowCard'


class ShowEditForm extends Component {
  //this is the edit form for shows, this is where we set the state
  state = {
    name: "",
    date: "",
    actOne:"",
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
          venue: show.Venue,
          loadingStatus: false,
        });
    });
  }
// and here is where we render our edit page
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


              <label htmlFor="date">Date</label>
              <input
                type="date"
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