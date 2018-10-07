import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travels from "./my-travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <Travels
          country="Madagascar"
          destination="Antananarivo "
          photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDncymwUyaYByg_PQyXvNI94RkdXt_dyN5WAHt8fSk8O7CXz6VrQ"
          distance="8369 km"
        />
        <Travels
          country="Allemagne"
          destination="Berlin "
          photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8hkyHtHv_vdZ2NKUpy3gtPcYtJaI1L-fl39kGeeOPqwBZWy6"
          distance="1231 km"
        />
      </div>
    );
  }
}

export default App;
