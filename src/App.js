import './App.css';
import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement} from './action/action';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const props = this.props;
    return(
      <div>
        <p>value: { props.value }</p>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
