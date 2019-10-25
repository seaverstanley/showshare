

import React, { Component } from 'react'
import ActCard from './ActCard'
import ActManager from '../../modules/ActManager'

class LocalActList extends Component {
  //define what this component needs to render
  state = {
    acts: []
  };

  deleteActProp = (id) => {
    ActManager.delete(id)
      .then(ActManager.getAll)
      .then(parsedActs => {
          this.setState({
              shows: parsedActs

          })
          })
          .then(()=>
        this.props.history.push("/localacts")
          )}




  componentDidMount() {
    console.log("SHOW LIST: ComponentDidMount");
    //getAll from ActManager and hang on to that data; put it in state
    ActManager.getAll().then(actsFromDatabase => {
      console.log(actsFromDatabase);
      this.setState({
        acts: actsFromDatabase
      });
    });
  }

  render() {
    console.log("ACT LIST: Render");

    return (
      <>
        <section className="section-content">
        </section>
        <div className="container-cards">
          {this.state.acts.map(singleAct => (
            <ActCard key={singleAct.id} deleteActProp={this.deleteActProp} actProp={singleAct} />

          ))}

        </div>
      </>
    );
  }
}

export default LocalActList;