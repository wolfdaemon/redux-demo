import React from 'react';
import { connect } from 'react-redux';

class ReduxCounter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT'});
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // receives entire store state and returns an object of date the component needs
  return {
    count: state.count
  };
}

/* exporting new connect (higher order) function,
then component. Connect passes in the entire state,
the object returned from mapStateToProps gets fed into component as props.
The keys in the object become prop names, and their corresponding values become the props’ values. */
export default connect(mapStateToProps)(ReduxCounter);
