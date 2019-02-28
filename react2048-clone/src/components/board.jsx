import React from 'react';
import Box from './box';

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      board: [[false, false], [true, false]]
    }
  }

  render(){
    let boardRender = [[false, false], [false, false]];
    this.state.board.forEach((row, idxr) => {
      row.forEach((space, idxs) => {
        if (!space){
          boardRender[idxr][idxs] = <div className="empty-space">BEEP</div>
        } else {
          boardRender[idxr][idxs] = <Box value="2" />
        }
      })
    })
    return(
      <div className="board-container">
        {boardRender}
      </div>
    );
  }
}

export default Board;