import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  return (
    <div className="App">



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand">Navbar</a>
        <form class="form-inline">
          <input class="form-control mr-sm-20" type="search" placeholder="Search" aria-label="Search" style={{size: "100"}} />
          <button class="btn btn-outline-success my-20 my-sm-20" type="submit">Search</button>
        </form>
      </nav>
    </div>
  );
}

export default App;
