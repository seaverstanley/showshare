import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import ShowShare from './components/ShowShare'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

ReactDOM.render(
  <Router>
    <ShowShare />
  </Router>
  , document.getElementById('root'))
