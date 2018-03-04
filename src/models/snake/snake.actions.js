import {
  FEED,
  KILL,
  MOVE,
  SET_BOARD_SIZE,
  START,
} from 'models/snake/snake.types';

export const setBoardSize = (size) => ({ type: SET_BOARD_SIZE, size });

export const start = () => ({ type: START });

export const move = () => ({ type: MOVE });
