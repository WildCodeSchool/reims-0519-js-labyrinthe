/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import grid from './Grid';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';
import GameOver from './GameWin';

const mapStateToProps = state => ({
    positionPlayerOne: state.positionPlayerOne,
    positionPlayerTwo: state.positionPlayerTwo,
})

    const Maze = ({ positionPlayerOne, positionPlayerTwo, dispatch }) => {

        useEffect(()=>{
            window.addEventListener('keydown', handleKeyDown)
            return ()=>{window.removeEventListener('keydown', handleKeyDown)}
         },[])

        const handleKeyDown = (event) => {
            switch (event.keyCode) {
              //Up Move
              case 90 : 
                dispatch({ type: 'MOVE_PLAYER_ONE_UP', positionPlayerTwo : positionPlayerTwo });
                break;
              case 38 : 
                dispatch({ type: 'MOVE_PLAYER_TWO_UP', positionPlayerOne: positionPlayerOne });
                break;
              //Down Move  
              case 83 :
                  dispatch({ type: 'MOVE_PLAYER_ONE_DOWN', positionPlayerTwo: positionPlayerTwo });
                break;
              case 40 :
                  dispatch({ type: 'MOVE_PLAYER_TWO_DOWN', positionPlayerOne: positionPlayerOne });
                break;
              //Left Move  
              case 81 :
                  dispatch({ type: 'MOVE_PLAYER_ONE_LEFT', positionPlayerTwo: positionPlayerTwo });
                break;
              case 37 :
                  dispatch({ type: 'MOVE_PLAYER_TWO_LEFT', positionPlayerOne: positionPlayerOne });
                break;  
              //Right Move  
              case 68 :
                  dispatch({ type: 'MOVE_PLAYER_ONE_RIGHT', positionPlayerTwo: positionPlayerTwo });
                break;
              case 39 :
                  dispatch({ type: 'MOVE_PLAYER_TWO_RIGHT', positionPlayerOne: positionPlayerOne });
                break;
            default : 
              console.log("default");
            }
          }

    

    return (
        <div>
            <div className="row">
                {grid.map(cell => (
                    <div className="case" key={cell.id} style={{
                        borderColor: '#aa3311',
                        borderStyle: 'dashed',
                        borderLeftColor: cell.left !== 0 && "grey",
                        borderTopColor: cell.top !== 0 && "grey",
                        borderBottomColor: cell.down !== 0 && "grey",
                        borderRightColor: cell.right !== 0 && "grey",
                        borderLeftWidth: cell.left !== 0 ? '3px' : '3px',
                        borderTopWidth: cell.top !== 0 ? '5px' : '5px',
                        borderBottomWidth: cell.down !== 0 ? '5px' : '5px',
                        borderRightWidth: cell.right !== 0 ? '3px' : '3px',

                    }}>
                        id={cell.id}
                        {cell.id === positionPlayerOne && <PlayerOne />}
                        {cell.id === positionPlayerTwo && <PlayerTwo />}
                    </div>))}
            </div>
            {positionPlayerOne === "out" && <GameOver />}
        </div>
    )
}

export default connect(mapStateToProps)(Maze);
