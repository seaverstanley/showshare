import { Route } from 'react-router-dom'
import React, { Component ,Redirect } from 'react'
import Home from './home/Home'
import Venues from './venues/Venues'
import About from './about/About'
import Login from './auth/Login'
import LogOut from './auth/LogOut'
import LoginCard from "./auth/LoginCard";
import RegisterCard from './auth/RegisterCard';
import Register from './auth/Register'
import Shows from './shows/Shows'
import ShowCard from './shows/ShowCard'
import ShowDetails from './shows/ShowDetails'
import NewShowCard from './shows/NewShowCard'
import LocalActs from "./localacts/LocalActs"

import ShowEditForm from './shows/ShowEditForm'






class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  render() {
    return (
      <React.Fragment>
        <Route exact path="/home" render={(props) => {
          return <Home />
        }} />
         <Route exact path ="/venues" render={(props) => {
            return <Venues />
        }}/>
         <Route exact path ="/about" render={(props) => {
            return <About />
        }}/>
        <Route exact path ="/login" render={(props) =>{
            return <Login />
        }}/>
         <Route exact path ="/home" render={(props) =>{
            return <LogOut />
        }}/>
           <Route exact path ="/shows" render={(props) =>{
            return <Shows {...props} />
        }}/>
        <Route exact path ="/localacts" render={(props) =>{
            return <LocalActs {...props} />
        }}/>
        <Route
          path="/shows/:showId(\d+)/edit"
          render={props => {
            return <ShowEditForm {...props} />;
          }}
        />
                <Route
          exact
          path="/shows/:showId(\d+)"
          render={props => {
            // Pass the showId to the showDetailComponent
            console.log("this is props", props);
            return this.isAuthenticated() ? (
              <ShowDetails
                {...props}
                showId={parseInt(props.match.params.showId)}
              />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />

            <Route
          path="/NewShow"
          render={props => {
            return this.isAuthenticated() ? (
              <NewShowCard {...props} />
            ) : (
              <Redirect to="/shows" />
            );
          }}
        />
         <Route
          exact
          path="/auth/LoginCard"
          render={props => {
            return <LoginCard {...props} userId = {parseInt(props.match.params.userId)}/>;
          }}/>
           <Route
          exact
          path="/ShowCard"
          render={props => {
            return <ShowCard {...props} userId = {parseInt(props.match.params.userId)}/>;
          }}/>
          <Route
          exact
          path="/auth/RegisterCard"
          render={props => {
            return <RegisterCard {...props} userId = {parseInt(props.match.params.userId)}/>;
          }}/>
           <Route exact path ="/login" render={(props) =>{
            return <Register/>
           }}/>
      </React.Fragment>


    )
  }
}

export default ApplicationViews

