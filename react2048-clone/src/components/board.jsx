import React from 'react';
import Box from './box';

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      board: [[false, true], [true, false]]
    }
    this.moveBox = this.moveBox.bind(this);
  }

  moveBox(event){
    let board = this.state.board.slice(0);
    switch(event.key){
      case "ArrowRight":
        this.state.board.forEach((row, idx) => {
          row.forEach((space, idxs) => {
            if(space && idxs < row.length - 1 && !board[idx][idxs + 1]){
              board[idx][idxs] = false;
              board[idx][idxs + 1] = true;
            }
          });
        });
      break;
      case "ArrowLeft":
        this.state.board.forEach((row, idx) => {
          row.forEach((space, idxs) => {
            if(space && idxs > 0 && !board[idx][idxs - 1]){
              board[idx][idxs] = false;
              board[idx][idxs - 1] = true;
            }
          });
        });
      break;
      case "ArrowUp":
        this.state.board.forEach((row, idx) => {
          row.forEach((space, idxs) => {
            if(space && idx > 0 && !board[idx - 1][idxs]){
              board[idx][idxs] = false;
              board[idx - 1][idxs] = true;
            }
          });
        });
      break;
      case "ArrowDown":
        this.state.board.forEach((row, idx) => {
          row.forEach((space, idxs) => {
            if(space && idx < board.length - 1 && !board[idx + 1][idxs]){
              board[idx][idxs] = false;
              board[idx + 1][idxs] = true;
            }
          });
        });
      break;
      default:
      break;
    }
    this.setState({board});
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
      <div className="board-container" onKeyDown={this.moveBox} tabIndex="0">
        {boardRender}
      </div>
    );
  }
}

export default Board;