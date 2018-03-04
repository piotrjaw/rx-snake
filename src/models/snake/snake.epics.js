import Rx from 'rxjs';

import {
  FEED,
  KILL,
  MOVE,
  START,
} from 'models/snake/snake.types';

export const start = action$ => action$
  .ofType(START)
  .switchMap(() => Rx.Observable
    .interval(1000)
    .mapTo({ type: MOVE })
  );
