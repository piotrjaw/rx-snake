import * as TYPES from './snake.types';

const turn = (x, y, degree) => ([
  x * Math.round(Math.cos(degree)) - y * Math.round(Math.sin(degree)),
  x * Math.round(Math.sin(degree)) + y * Math.round(Math.cos(degree)),
]);

const turnLeft = ([x, y]) => turn(x, y, -(Math.PI / 2));
const turnRight = ([x, y]) => turn(x, y, (Math.PI / 2));

const DIRECTIONS = {
  E: {
    name: 'E',
    vector: [1, 0],
  },
  N: {
    name: 'N',
    vector: [0, -1],
  },
  S: {
    name: 'S',
    vector: [0, 1],
  },
  W: {
    name: 'W',
    vector: [-1, 0],
  },
};

const getRandomPosition = (size) => Math.floor(1 + Math.random() * (size - 2));

const getInitialDirection = (size, x, y) => {
  switch (true) {
    case x >= y && (size - 1) - x >= y:
      return DIRECTIONS.S.name;
    case x >= y && (size - 1) - x < y:
      return DIRECTIONS.W.name;
    case x < y && (size - 1) - x >= y:
      return DIRECTIONS.E.name;
    case x < y && (size - 1) - x < y:
      return DIRECTIONS.N.name;
    default:
      return '';
  }
};

const initialState = {
  turn: 0,
  length: 1,
  isAlive: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FEED:
      return {
      ...state,
      length: state.length + 1,
    };
    case TYPES.KILL:
      return {
        ...state,
        isAlive: false,
      };
    case TYPES.MOVE:
      return {
        ...state,
        turn: state.turn + 1,
      };
    case TYPES.SET_BOARD_SIZE:
      return {
        ...state,
        boardSize: action.size,
      }
    case TYPES.START:
      const headXPosition = getRandomPosition(state.boardSize);
      const headYPosition = getRandomPosition(state.boardSize);
      return {
        ...state,
        direction: getInitialDirection(state.boardSize, headXPosition, headYPosition),
        snake: [
          [
            headXPosition,
            headYPosition,
          ]
        ]
      };
    default:
      return state;
  }
};
