import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  // HashRouter,
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
// import NewsItem from './components/NewsItem';

export default class App extends Component {
  pageSize=8
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar/> 
          {/* <News pageSize={this.pageSize} country="in" category="general"/> */}
          {/* <NewsItem/> */}
          {/* 26f6d023503d4880b4c7347f0b576c63 */}
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health"/>}/>
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category="science"/>}/>
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports"/>}/>
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
            <Route exact path="/home" element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
            <Route exact path="/about" element={<About category="About"/> } />
            {/* <Route exact path="/services" element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>}/> */}
            <Route exact path="/contact" element={<Contact category="contact"/> }/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

