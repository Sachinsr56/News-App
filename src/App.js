import Navbar from "./Components/NavBar"
import './App.css'
import React, { Component } from 'react'
import News from './Components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    const apiKey=process.env.REACT_APP_API_KEY;
    return (
        <div>
        <Router>
          <Navbar/>
          <Routes>
              <Route exact path="/" element={<News  apiKey={apiKey} key="general" pageSize={6} country="in" category="general"/>}/>
              <Route exact path="/science" element={<News  apiKey={apiKey} key="science" pageSize={6} country="us" category="science"/>} />
              <Route exact path="/business" element={<News  apiKey={apiKey} key="business" pageSize={6} country="in" category="business"/>} />
              <Route exact path="/entertainment" element={<News  apiKey={apiKey} key="entertainment" pageSize={6} country="in" category="entertainment"/>}/>
              <Route exact path="/health" element={<News  apiKey={apiKey} key="health" pageSize={6} country="in" category="health"/>}/>
              <Route exact path="/sports" element={<News  apiKey={apiKey} key="sports" pageSize={6} country="in" category="sports"/>}/>
              <Route exact path="/technology" element={<News  apiKey={apiKey} key="technology" pageSize={6} country="in" category="technology"/>}/>
          </Routes>
        </Router>
        </div>
    )
  }
}