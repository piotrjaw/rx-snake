import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Rx from 'rxjs';
import * as snakeActions from 'models/snake/snake.actions';

const snakeContainer = (ComposedComponent) => {
  class SnakeContainerComponent extends PureComponent {
    componentDidMount() {
      Rx.Observable
        .interval(1000)
        .bufferCount(3, 1)
        .subscribe(x => console.log(x));
    }

    render() {
      return (
        <ComposedComponent
          { ...this.props }
        />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    snakeActions: bindActionCreators(snakeActions, dispatch),
  });

  const mapStateToProps = ({ snake }) => ({
    snake,
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SnakeContainerComponent);
};

export default snakeContainer;
