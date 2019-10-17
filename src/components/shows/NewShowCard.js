
import React, { Component } from "react";
import ShowManager from "../../modules/ShowManager";


class ShowCard extends Component {
  state = {
    showName: "",
    actOne:'',
    actTwo:'',
    actThree:'',
    date: "",
    venue:'',
    loadingStatus: false,
  };

  handleFieldChange = evt => {
    console.log("this is event.target.id", evt.target.id);
    console.log("this is event.target.value", evt.target.value);
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    console.log("this is state to change", stateToChange);
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the ShowManager post method, and redirect to the full animal list
   */
  constructNewShow = evt => {
    evt.preventDefault();
    if (this.state.showName=== "" || this.state.date === "") {
      window.alert("Please input all the show info");
    } else {
      this.setState({ loadingStatus: true });
      const show = {
        name: this.state.showName,
        date: this.state.date,
        bandOne: this.state.firstAct,
        bandTwo: this.state.secondAct,
        bandThree: this.state.thirdAct,
        venue: this.state.venue,
      };

      // Create the animal and redirect user to animal list
      ShowManager.post(show).then(() =>
        this.props.history.push("/shows")
      );
    }
  };

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
                onClick={this.constructNewShow}
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

export default ShowCard