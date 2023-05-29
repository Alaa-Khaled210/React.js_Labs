import React, { Component } from 'react'

 class StateQ3 extends Component {
  constructor(props){
super(props)
this.state={
  isloggendin : false,
  subscription : "Guest"  
}

 }
 changestatus() {
  this.setState({
   isloggendin : true,
   subscription :" you now Have a subscription"
  }) 
  console.log(this);
 }

  render() {
    return (
      <div>
      <h1>your login state is : {this.state.isloggendin.toString()} , Hello {this.state.subscription} </h1>
      <button onClick={()=>this.changestatus()} >status</button>
      </div>
    )
  }
}

export default StateQ3;