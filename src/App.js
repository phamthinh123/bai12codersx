import React, { Component } from 'react';
import './App.css';
import SearchBox from "./components/SearchBox";
import classNames from 'classnames';
class App extends Component {
  constructor(){
    super();
    
    this.state={
      isFocused:false
    }
    this.onFocus=this.onFocus.bind(this);
    this.onBlur=this.onBlur.bind(this);
  }
onFocus(){
  this.setState={
    isFocused:true
  }
}
onBlur(){
  this.setState={
    isFocused:false
  }
}
  render(){
    const { isFocused }=this.state;

  return (
    <div className="App">
      <SearchBox isFocused={isFocused} onFocus={this.onFocus} onBlur={this.onBlur}/>
      
    </div>
  );
}
}

export default App;
