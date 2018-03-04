import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import BoardComponent from 'components/Board';
import snakeContainer from 'containers/SnakeContainer';
import store from 'store';

const Board = snakeContainer(BoardComponent);

class App extends PureComponent {
  render() {
    return (
      <Provider store={ store }>
        <Board
          size={ 10 }
        />
      </Provider>
    );
  }
}

export default App;
