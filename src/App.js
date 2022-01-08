import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand">SRIRAM Navbar</a>
        <div>
          
        </div>
        <form class="form-inline">
          <input class="form-control mr-sm-20" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-20 my-sm-20" type="submit">Search</button>
        </form>
      </nav>
    </div>
  );
}

export default App;
