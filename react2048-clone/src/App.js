import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board';

class App extends Component {
  render() {
    return (
      <Board />
    );
  }
}

export default App;


// All right!  So 2048, how we doing this?
// 1. Create a 2 x 2 Board that has 1 Box (HOORAY)
// 2. Create logic to move that Box
// 3. Create collision logic on 2 x 2
// 3a. Smoosh logic - two boxes become one
// 3b. Collide logic - two boxes rest next to each other
// 4. Create logic to add Box each move
// 5. Create logic for numbers (cap at 8 or something, only add 2s)
// 6. Update Smoosh logic
// 7. Scale up the board
// 8. Update collision logic because it needs to deal with whooshing the things all the way to the direction
// 9. Scale up numbers
// 10. Style.

//App structure:
// <App>
// -<Board (render a 2d array of Boxes), logic for collision and smooshing>
// --<Box (receives numbers from Board)>