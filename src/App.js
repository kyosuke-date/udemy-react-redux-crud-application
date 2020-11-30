import './App.css';
import React from 'react';

//function App() {
//  return (
//    <div>Hello, World</div>
//  );
//}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  numPlus = () => {
    const int = this.state.count;
    this.setState({ count: int + 1 });
  }
  numMinus = () => {
    const int = this.state.count;
    this.setState({ count: int - 1 });
  }

  render(){
    return(
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.numPlus}>+1</button>
        <button onClick={this.numMinus}>-1</button>
      </div>
    )
  }
}
export default App;
