import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import LocalActs from './localacts/LocalActs'
import Venues from './venues/Venues'
import About from './about/About'
import Shows from './shows/Shows'
import Login from './auth/Login'
// import LogOut from './auth/LogOut'
import LoginCard from "./auth/LoginCard";
import RegisterCard from './auth/RegisterCard';
// import ActCard from './localact/ActCard'
import Register from './auth/Register'





class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/home" render={(props) => {
          return <Home />
        }} />
        <Route exact path ="/localacts" render={(props) => {
            return <LocalActs />
        }}/>
         <Route exact path ="/venues" render={(props) => {
            return <Venues />
        }}/>
         <Route exact path ="/about" render={(props) => {
            return <About />
        }}/>
        <Route exact path ="/shows" render={(props) =>{
            return <Shows />
        }}/>
        <Route exact path ="/login" render={(props) =>{
            return <Login />
        }}/>
         <Route exact path ="/home" render={(props) =>{
            return <Log-Out />
        }}/>
         {/* <Route
          exact
          path="/auth/ActCard"
          render={props => {
            return <ActCard {...props} userId = {parseInt(props.match.params.userId)}/>;
          }}/> */}
         <Route
          exact
          path="/auth/LoginCard"
          render={props => {
            return <LoginCard {...props} userId = {parseInt(props.match.params.userId)}/>;
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

