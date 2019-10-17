

// import React, { Component } from "react";
// import ShowManager from "../../modules/ShowManager"
// import ActManager from '../../modules/ActManager'

// class NewShowCard extends Component {
//   state = {
//     showName: "",
//     actOne: '',
//     date: "",
//     venue:'',
//     loadingStatus: false,
//   };

//   handleFieldChange = evt => {
//     console.log("this is event.target.id", evt.target.id);
//     console.log("this is event.target.value", evt.target.value);
//     const stateToChange = {};
//     stateToChange[evt.target.id] = evt.target.value;
//     console.log("this is state to change", stateToChange);
//     this.setState(stateToChange);
//   };

//   // this is so we can get all the bands

//   componentDidMount() {
//     console.log("ACT LIST: ComponentDidMount");
// //  grab everything from the manager
//     ActManager.getAll().then(actsFromDatabase => {
//       console.log(actsFromDatabase);
//       this.setState({
//         acts: actsFromDatabase
//       });
//     });
//   }

//   /*  Local method for validation, set loadingStatus, create animal      object, invoke the ShowManager post method, and redirect to the full animal list
//    */
//   constructNewShow = evt => {
//     evt.preventDefault();
//     if (this.state.showName=== "" || this.state.date === "") {
//       window.alert("Please input all the show info");
//     } else {
//       this.setState({ loadingStatus: true });
//       const show = {
//         name: this.state.showName,
//         date: this.state.date,
//         bandOne: this.state.firstAct,
//         venue: this.state.venue,
//       };

//       // Create the animal and redirect user to animal list
//       ShowManager.post(show).then(() =>
//         this.props.history.push("/shows")
//       );
//     }
//   };

//   render() {
//     return (
//       <>
//         <form>
//           <fieldset>
//             <div className="formgrid">
//               <label htmlFor="showName">Name</label>
//               <input
//                 type="text"
//                 required
//                 onChange={this.handleFieldChange}
//                 id="showName"
//                 placeholder="Show name"
//               />
//               {/* here is the dropdown for acts/bands */}
//               <select
//                 className="form-control"
//                 id="actId"
//                 value={this.state.actId}
//                 onChange={this.handleFieldChange}
//               >
//                 {/* {this.state.acts.map(act => (
//                   <option
//                     key={act.id.actName}
//                     value={act.id.actName}
//                   >
//                     {act.actName}
//                   </option>
//                 ))} */}
//               </select>

//               {/* here is the dropdown for date */}
//               <label htmlFor="date">Date</label>
//               <input
//                 type="date"
//                 required
//                 onChange={this.handleFieldChange}
//                 id="date"
//                 placeholder="Date"
//               />
//               <label htmlFor="venue">Venue</label>
//                  <select
//                 type="select"
//                 required
//                 onChange={this.handleFieldChange}
//                 id="venue"
//                 placeholder="Venue"
//               />

//             </div>
//             <div className="alignRight">
//               <button
//                 type="button"
//                 disabled={this.state.loadingStatus}
//                 onClick={this.constructNewShow}
//               >
//                 Submit
//               </button>
//             </div>
//           </fieldset>
//         </form>
//       </>
//     );
//   }
// }

// export default NewShowCard