import React, { PureComponent } from 'react';
import 'components/Board/Board.css';

export default class Board extends PureComponent {
  componentDidMount() {
    this.props.snakeActions.setBoardSize(this.props.size);
    this.props.snakeActions.start();
  }

  renderCells = (y) => Array
    .from(Array(this.props.size).keys())
    .map((undefined, x) => (
      <div
        className="Board__cell"
        key={ x }
      >
        { `${x}, ${y}` }
      </div>
    ));

  renderRows = () => Array
    .from(Array(this.props.size).keys())
    .map((undefined, y) => (
      <div
        className="Board__row"
        key={ y }
      >
        { this.renderCells(y) }
      </div>
    ));

  render() {
    return (
      <div className="Board">
        { this.props.snake.turn }
        <br />
        { this.props.snake.length }
        <br />
        { this.props.snake.boardSize }
        <br />
        { this.props.snake.direction }
        <br />
        is alive: { this.props.snake.isAlive.toString() }
        <div className="Board__wrapper">
          { this.renderRows() }
        </div>
      </div>
    )
  }
}
