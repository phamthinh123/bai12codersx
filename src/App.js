import React, { Component } from 'react';
import './App.css';
import SearchBox from "./components/SearchBox";
class App extends Component {
  constructor(){
    super();
 
    this.state={
      isFocused:false,
      borderColor: "rgba(124, 146, 205, 0.7)",
      inputValue:"" 
    }  
    this.onFocus=this.onFocus.bind(this);
    this.onBlur=this.onBlur.bind(this);
    this.changeColor=this.changeColor.bind(this);
    this.changeColor2=this.changeColor2.bind(this);
    this.updateValue=this.updateValue.bind(this);
  }
onFocus(){

  this.setState({
    isFocused:true
  })
 
}
onBlur(){
  
  this.setState({
    isFocused:false
  })

}
changeColor(){
  this.setState({
    borderColor:"red"
  })
   console.log(this.state.borderColor)
}
resetColor() {
  this.setState({
    borderColor: "rgba(124, 146, 205, 0.7)"
  })
   console.log(this.state.borderColor)

}
changeColor2(){
  this.setState({
    borderColor:"yellow"
  })
  console.log(this.state.borderColor)
}
updateValue(evt){
  const value = evt.target.value;
 
  if(value.length===10&&/^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/.test(value)===true) this.changeColor2();
  if (value.length > 10) this.changeColor()
  if(value.length<10) this.resetColor();
  this.setState({
    inputValue: value
  })

}

render(){
    const { isFocused, borderColor, inputValue }=this.state;

  return (
    <div className="App">
      <SearchBox 
        isFocused={isFocused} 
        borderColor={borderColor} 
        inputValue={inputValue} 
        updateValue={this.updateValue} 
        onFocus={this.onFocus} 
        onBlur={this.onBlur}/>
      {/*<input 
        type="text" 
        onChange={e => { 
          if (e.target.value.length > 10) { 
            this.setState({ borderColor: 'red' }) 
          } else {
            this.setState({ borderColor: 'rgba(124, 146, 205, 0.7)'})
          } 
        }}
        style={{borderColor: this.state.borderColor}} />*/}
      
    </div>
  );
}
}

export default App;
