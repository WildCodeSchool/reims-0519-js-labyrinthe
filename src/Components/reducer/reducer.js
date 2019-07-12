const initialState = {
    isWelcomePageDisplayed: true,
    isMazePageDisplayed: false,
    isWinnerPageDisplayed: false,
    positionPlayerOne: 2,
    positionPlayerTwo: 20,
    positionKey: 115,
    isKeyFound: false,
    upValueForCell45: 0,
    downValueForCell30: 0,
    grid: [
        {
            id: 1,
            up: 0,
            down: 16,
            left: 0,
            right: 0,
        },
        {
            id: 2,
            up: 0,
            down: 17,
            left: 0,
            right: 3,
        },
        {
            id: 3,
            up: 0,
            down: 18,
            left: 2,
            right: 4,
        },
        {
            id: 4,
            up: 0,
            down: 0,
            left: 3,
            right: 5,
        },
        {
            id: 5,
            up: 0,
            down: 0,
            left: 4,
            right: 6,
        },
        {
            id: 6,
            up: 0,
            down: 21,
            left: 5,
            right: 0,
        },
        {
            id: 7,
            up: 0,
            down: 22,
            left: 0,
            right: 8,
        },
        {
            id: 8,
            up: 0,
            down: 0,
            left: 7,
            right: 9,
        },
        {
            id: 9,
            up: 0,
            down: 24,
            left: 8,
            right: 0,
        },
        {
            id: 10,
            up: 0,
            down: 25,
            left: 0,
            right: 11,
        },
        {
            id: 11,
            up: 0,
            down: 0,
            left: 10,
            right: 12,
        },
        {
            id: 12,
            up: 0,
            down: 0,
            left: 11,
            right: 13,
        },
        {
            id: 13,
            up: 0,
            down: 0,
            left: 12,
            right: 14,
        },
        {
            id: 14,
            up: 0,
            down: 29,
            left: 13,
            right: 0,
        },
        {
            id: 15,
            up: 0,
            down: 30,
            left: 0,
            right: "out",
        },
        {
            id: 16,
            up: 1,
            down: 31,
            left: 0,
            right: 17,
        },
        {
            id: 17,
            up: 2,
            down: 0,
            left: 16,
            right: 0,
        },
        {
            id: 18,
            up: 3,
            down: 0,
            left: 0,
            right: 19,
        },
        {
            id: 19,
            up: 0,
            down: 34,
            left: 18,
            right: 0,
        },
        {
            id: 20,
            up: 0,
            down: 35,
            left: 0,
            right: 0,
        },
        {
            id: 21,
            up: 6,
            down: 36,
            left: 0,
            right: 0,
        },
        {
            id: 22,
            up: 7,
            down: 37,
            left: 0,
            right: 23,
        },
        {
            id: 23,
            up: 0,
            down: 38,
            left: 22,
            right: 0,
        },
        {
            id: 24,
            up: 9,
            down: 39,
            left: 0,
            right: 0,
        },
        {
            id: 25,
            up: 10,
            down: 0,
            left: 0,
            right: 26,
        },
        {
            id: 26,
            up: 0,
            down: 41,
            left: 25,
            right: 0,
        },
        {
            id: 27,
            up: 0,
            down: 42,
            left: 0,
            right: 28,
        },
        {
            id: 28,
            up: 0,
            down: 43,
            left: 27,
            right: 0,
        },
        {
            id: 29,
            up: 14,
            down: 44,
            left: 0,
            right: 0,
        },
        {
            id: 30,
            up: 15,
            down: 0,
            left: 0,
            right: 0,
        },
        {
            id: 31,
            up: 16,
            down: 46,
            left: 0,
            right: 0,
        },
        {
            id: 32,
            up: 0,
            down: 47,
            left: 0,
            right: 0,
        },
        {
            id: 33,
            up: 0,
            down: 48,
            left: 0,
            right: 34,
        },
        {
            id: 34,
            up: 19,
            down: 0,
            left: 33,
            right: 0,
        },
        {
            id: 35,
            up: 20,
            down: 0,
            left: 0,
            right: 36,
        },
        {
            id: 36,
            up: 21,
            down: 0,
            left: 35,
            right: 0,
        },
        {
            id: 37,
            up: 22,
            down: 0,
            left: 0,
            right: 0,
        },
        {
            id: 38,
            up: 23,
            down: 53,
            left: 0,
            right: 0,
        },
        {
            id: 39,
            up: 24,
            down: 0,
            left: 0,
            right: 40,
        },
        {
            id: 40,
            up: 0,
            down: 0,
            left: 39,
            right: 41,
        },
        {
            id: 41,
            up: 26,
            down: 0,
            left: 40,
            right: 0,
        },
        {
            id: 42,
            up: 27,
            down: 57,
            left: 0,
            right: 0,
        },
        {
            id: 43,
            up: 28,
            down: 58,
            left: 0,
            right: 0,
        },
        {
            id: 44,
            up: 29,
            down: 0,
            left: 0,
            right: 45,
        },
        {
            id: 45,
            up: 0,
            down: 0,
            left: 44,
            right: 0,
        },
        {
            id: 46,
            up: 31,
            down: 61,
            left: 0,
            right: 0,
        },
        {
            id: 47,
            up: 32,
            down: 62,
            left: 0,
            right: 0,
        },
        {
            id: 48,
            up: 33,
            down: 63,
            left: 0,
            right: 0,
        },
        {
            id: 49,
            up: 0,
            down: 0,
            left: 0,
            right: 50,
        },
        {
            id: 50,
            up: 0,
            down: 65,
            left: 49,
            right: 51,
        },
        {
            id: 51,
            up: 0,
            down: 0,
            left: 50,
            right: 52,
        },
        {
            id: 52,
            up: 0,
            down: 67,
            left: 51,
            right: 0,
        },
        {
            id: 53,
            up: 38,
            down: 68,
            left: 0,
            right: 0,
        },
        {
            id: 54,
            up: 0,
            down: 0,
            left: 0,
            right: 55,
        },
        {
            id: 55,
            up: 0,
            down: 70,
            left: 54,
            right: 56,
        },
        {
            id: 56,
            up: 0,
            down: 0,
            left: 55,
            right: 57,
        },
        {
            id: 57,
            up: 42,
            down: 0,
            left: 56,
            right: 0,
        },
        {
            id: 58,
            up: 43,
            down: 0,
            left: 0,
            right: 59,
        },
        {
            id: 59,
            up: 0,
            down: 0,
            left: 58,
            right: 60,
        },
        {
            id: 60,
            up: 0,
            down: 0,
            left: 59,
            right: 0,
        },
        {
            id: 61,
            up: 46,
            down: 76,
            left: 0,
            right: 0,
        },
        {
            id: 62,
            up: 47,
            down: 77,
            left: 0,
            right: 0,
        },
        {
            id: 63,
            up: 48,
            down: 78,
            left: 0,
            right: 64,
        },
        {
            id: 64,
            up: 0,
            down: 0,
            left: 63,
            right: 65,
        },
        {
            id: 65,
            up: 50,
            down: 80,
            left: 64,
            right: 0,
        },
        {
            id: 66,
            up: 0,
            down: 81,
            left: 0,
            right: 67,
        },
        {
            id: 67,
            up: 52,
            down: 0,
            left: 66,
            right: 0,
        },
        {
            id: 68,
            up: 53,
            down: 83,
            left: 0,
            right: 0,
        },
        {
            id: 69,
            up: 0,
            down: 84,
            left: 0,
            right: 70,
        },
        {
            id: 70,
            up: 55,
            down: 0,
            left: 69,
            right: 0,
        },
        {
            id: 71,
            up: 0,
            down: 86,
            left: 0,
            right: 72,
        },
        {
            id: 72,
            up: 0,
            down: 87,
            left: 71,
            right: 0,
        },
        {
            id: 73,
            up: 0,
            down: 88,
            left: 0,
            right: 74,
        },
        {
            id: 74,
            up: 0,
            down: 89,
            left: 73,
            right: 0,
        },
        {
            id: 75,
            up: 0,
            down: 90,
            left: 0,
            right: 0,
        },
        {
            id: 76,
            up: 61,
            down: 91,
            left: 0,
            right: 0,
        },
        {
            id: 77,
            up: 62,
            down: 0,
            left: 0,
            right: 78,
        },
        {
            id: 78,
            up: 63,
            down: 0,
            left: 77,
            right: 0,
        },
        {
            id: 79,
            up: 0,
            down: 94,
            left: 0,
            right: 80,
        },
        {
            id: 80,
            up: 65,
            down: 95,
            left: 79,
            right: 0,
        },
        {
            id: 81,
            up: 66,
            down: 0,
            left: 0,
            right: 82,
        },
        {
            id: 82,
            up: 0,
            down: 97,
            left: 81,
            right: 0,
        },
        {
            id: 83,
            up: 68,
            down: 0,
            left: 0,
            right: 84,
        },
        {
            id: 84,
            up: 69,
            down: 0,
            left: 83,
            right: 85,
        },
        {
            id: 85,
            up: 0,
            down: 0,
            left: 84,
            right: 86,
        },
        {
            id: 86,
            up: 71,
            down: 0,
            left: 85,
            right: 0,
        },
        {
            id: 87,
            up: 72,
            down: 0,
            left: 0,
            right: 88,
        },
        {
            id: 88,
            up: 73,
            down: 0,
            left: 87,
            right: 0,
        },
        {
            id: 89,
            up: 74,
            down: 104,
            left: 0,
            right: 90,
        },
        {
            id: 90,
            up: 75,
            down: 105,
            left: 89,
            right: 0,
        },
        {
            id: 91,
            up: 76,
            down: 106,
            left: 0,
            right: 0,
        },
        {
            id: 92,
            up: 0,
            down: 0,
            left: 0,
            right: 93,
        },
        {
            id: 93,
            up: 0,
            down: 0,
            left: 92,
            right: 94,
        },
        {
            id: 94,
            up: 79,
            down: 109,
            left: 93,
            right: 0,
        },
        {
            id: 95,
            up: 80,
            down: 0,
            left: 0,
            right: 96,
        },
        {
            id: 96,
            up: 0,
            down: 0,
            left: 95,
            right: 0,
        },
        {
            id: 97,
            up: 82,
            down: 112,
            left: 0,
            right: 98,
        },
        {
            id: 98,
            up: 0,
            down: 0,
            left: 97,
            right: 99,
        },
        {
            id: 99,
            up: 0,
            down: 114,
            left: 98,
            right: 100,
        },
        {
            id: 100,
            up: 0,
            down: 0,
            left: 99,
            right: 101,
        },
        {
            id: 101,
            up: 0,
            down: 116,
            left: 100,
            right: 102,
        },
        {
            id: 102,
            up: 0,
            down: 0,
            left: 101,
            right: 103,
        },
        {
            id: 103,
            up: 0,
            down: 0,
            left: 102,
            right: 104,
        },
        {
            id: 104,
            up: 89,
            down: 0,
            left: 103,
            right: 0,
        },
        {
            id: 105,
            up: 90,
            down: 0,
            left: 0,
            right: 0,
        },
        {
            id: 106,
            up: 91,
            down: 0,
            left: 0,
            right: 107,
        },
        {
            id: 107,
            up: 0,
            down: 0,
            left: 106,
            right: 108,
        },
        {
            id: 108,
            up: 0,
            down: 0,
            left: 107,
            right: 109,
        },
        {
            id: 109,
            up: 94,
            down: 0,
            left: 108,
            right: 110,
        },
        {
            id: 110,
            up: 0,
            down: 0,
            left: 109,
            right: 111,
        },
        {
            id: 111,
            up: 0,
            down: 0,
            left: 110,
            right: 0,
        },
        {
            id: 112,
            up: 97,
            down: 0,
            left: 0,
            right: 113,
        },
        {
            id: 113,
            up: 0,
            down: 0,
            left: 112,
            right: 0,
        },
        {
            id: 114,
            up: 99,
            down: 0,
            left: 0,
            right: 115,
        },
        {
            id: 115,
            up: 0,
            down: 0,
            left: 114,
            right: 0,
        },
        {
            id: 116,
            up: 101,
            down: 0,
            left: 0,
            right: 117,
        },
        {
            id: 117,
            up: 0,
            down: 0,
            left: 116,
            right: 118,
        },
        {
            id: 118,
            up: 0,
            down: 0,
            left: 117,
            right: 119,
        },
        {
            id: 119,
            up: 0,
            down: 0,
            left: 118,
            right: 120,
        },
        {
            id: 120,
            up: 0,
            down: 0,
            left: 119,
            right: 0,
        },]
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DISPLAY_MAZE':
            return {
                ...state,
                isWelcomePageDisplayed: !state.isWelcomePageDisplayed,
                isMazePageDisplayed: !state.isMazePageDisplayed,
            };
        case 'GET_KEY':
            return {
                ...state,
                isKeyFound: true,
                grid: state.grid.map(cell => (
                    {
                        ...cell,
                        up: cell.id === 45 ? 30 : cell.up,
                        down: cell.id === 30 ? 45 : cell.down
                    }
                )
                )
            };
        case 'OPEN_DOOR':
            return {
                ...state,
            }
        case 'MOVE_PLAYER_ONE_UP':
            return {
                ...state,
                positionPlayerOne: state.grid[state.positionPlayerOne - 1].up !== 0 ? state.grid[state.positionPlayerOne - 1].up : state.positionPlayerOne,
                grid: state.positionPlayerOne === state.positionKey - 1 ? state.grid.map(cell => (
                    {
                        ...cell,
                        up: cell.id === 45 ? 30 : cell.up,
                        down: cell.id === 30 ? 45 : cell.down
                    }

                )
                )
                    :
                    state.grid,
                isKeyFound: state.positionPlayerOne === state.positionKey - 1 ? true : state.isKeyFound,
            };
        case 'MOVE_PLAYER_ONE_DOWN':
            return {
                ...state,
                positionPlayerOne: state.grid[state.positionPlayerOne - 1].down !== 0 ? state.grid[state.positionPlayerOne - 1].down : state.positionPlayerOne,
                grid: state.positionPlayerOne === state.positionKey - 1 ? state.grid.map(cell => (
                    {
                        ...cell,
                        up: cell.id === 45 ? 30 : cell.up,
                        down: cell.id === 30 ? 45 : cell.down
                    }

                )
                )
                    :
                    state.grid,
                isKeyFound: state.positionPlayerOne === state.positionKey - 1 ? true : state.isKeyFound,
            };
        case 'MOVE_PLAYER_ONE_LEFT':
            return {
                ...state,
                positionPlayerOne: state.grid[state.positionPlayerOne - 1].left !== 0 ? state.grid[state.positionPlayerOne - 1].left : state.positionPlayerOne,
                grid: state.positionPlayerOne === state.positionKey - 1 ? state.grid.map(cell => (
                    {
                        ...cell,
                        up: cell.id === 45 ? 30 : cell.up,
                        down: cell.id === 30 ? 45 : cell.down
                    }

                )
                )
                    :
                    state.grid,
                isKeyFound: state.positionPlayerOne === state.positionKey - 1 ? true : state.isKeyFound,
            };
        case 'MOVE_PLAYER_ONE_RIGHT':
            return {
                ...state,
                positionPlayerOne: state.grid[state.positionPlayerOne - 1].right !== 0 ? state.grid[state.positionPlayerOne - 1].right : state.positionPlayerOne,
                grid: state.positionPlayerOne === state.positionKey - 1 ? state.grid.map(cell => (
                    {
                        ...cell,
                        up: cell.id === 45 ? 30 : cell.up,
                        down: cell.id === 30 ? 45 : cell.down
                    }

                )
                )
                    :
                    state.grid,
                isKeyFound: state.positionPlayerOne === state.positionKey - 1 ? true : state.isKeyFound,
            };
        case 'MOVE_PLAYER_TWO_UP':
            return {
                ...state,
                positionPlayerTwo: state.grid[state.positionPlayerTwo - 1].up !== 0 ? state.grid[state.positionPlayerTwo - 1].up : state.positionPlayerTwo,
            };
        case 'MOVE_PLAYER_TWO_DOWN':
            return {
                ...state,
                positionPlayerTwo: state.grid[state.positionPlayerTwo - 1].down !== 0 ? state.grid[state.positionPlayerTwo - 1].down : state.positionPlayerTwo,
            };
        case 'MOVE_PLAYER_TWO_LEFT':
            return {
                ...state,
                positionPlayerTwo: state.grid[state.positionPlayerTwo - 1].left !== 0 ? state.grid[state.positionPlayerTwo - 1].left : state.positionPlayerTwo,
            };
        case 'MOVE_PLAYER_TWO_RIGHT':
            return {
                ...state,
                positionPlayerTwo: state.grid[state.positionPlayerTwo - 1].right !== 0 ? state.grid[state.positionPlayerTwo - 1].right : state.positionPlayerTwo,
            };
        case 'RETRY':
            return {
                ...state,
                isWelcomePageDisplayed: true,
                isMazePageDisplayed: false,
                positionPlayerOne: 2,
                positionPlayerTwo: 20,
            }

        default:
            return state;
    }
};

export default reducer;
