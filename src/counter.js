import React from 'react';

export default
class Counter extends React.Component {
  constructor(){
    super();
    this.state = {
      c: 0
    }
  }

  clickHandler = () => {
    this.setState({c: this.state.c+1});
  }

  render(){
    return(
      <div>
        <p>{this.state.c}</p>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
} 