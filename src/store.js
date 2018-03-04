import { applyMiddleware, combineReducers, createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import snake from 'models/snake/snake.reducer';
import * as snakeEpics from 'models/snake/snake.epics';

export default createStore(
  combineReducers({
    snake
  }),
  // applyMiddleware(
  //   createEpicMiddleware(
  //     combineEpics(
  //       ...snakeEpics
  //     )
  //   )
  // )
  applyMiddleware(
    createEpicMiddleware(
      snakeEpics.start
    )
  )
);
