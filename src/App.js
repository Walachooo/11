import React from 'react';

import './App.css';

class App extends React.Component {
  state={
    active:true
  }
  handleClick = ()=>{
 
    this.setState({
      active: !this.state.active
    })
  }
  render() { 
    const btn_off = {
      border: '2px solid green',
      padding: '10px 20px',
      fontFamily : 'arial',
      display:'block',
      margin:'20px auto',
      backgroundColor: 'white',
      color: 'blue'
    }
    const btn_on = {
      border: '4px solid blue',
      padding: '10px 20px',
      fontFamily : 'arial',
      display:'block',
      margin:'20px auto',
      backgroundColor: 'red'
    }
    
    return (
    <div>
      <button 
      style={this.state.active? btn_on:btn_off}
      onClick={this.handleClick}>{this.state.active?"Wyłącz": "Włącz"}</button>
    </div>
    );
  }
}
 
export default App;