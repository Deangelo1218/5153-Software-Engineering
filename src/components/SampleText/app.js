import React, { Component } from 'react';


import User from './listing';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'





class App extends Component {



  render() {
    return (
      <div className="App list-group-item justify-content-center align-items-center mx-auto" id="search" style={{"width":"400px", "backgroundColor":"white", "marginTop":"25px", "marginBottom": "50px"}}>
      <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">Pantry</h1>
      
      <div className="card-body">
        <h5 className="card text-white bg-dark mb-3">Add Ingredients Here</h5>
          <span className="card-text">
            <User/>
          </span>      
      </div>
      {/* <h6 className="card text-dark bg-warning py-1 mb-0">Copyright 2021, All rights reserved to Sau·té &copy;</h6> */}
    </div>
  
      
    
    );
  }
}


export default App;