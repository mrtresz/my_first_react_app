import React, { Component } from 'react'
import './App.css'
import Products from './Products';
// import { Button } from 'react-bootstrap';
// import Rating from './Rating';
// import Product from './Product';


class App extends Component {
  render() {
    // const isValid = true;

    // Render Rating components with different initial ratings
    // Each Rating component will display stars according to the initial rating it receives
    return (
      <div className='App'>

        <Products />

      </div>
    )
  }
}

export default App;
