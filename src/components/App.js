
import "./styles.css";

import React from "react";

class App extends React.Component{

  constructor(){
    super()
    this.state={
      time:new Date().toLocaleTimeString()
    }

    this.DateFunction=this.DateFunction.bind(this)
  }

  DateFunction(){
    
  let date = new Date()

  let updateHour = date.getHours()
 
  let updateMinute = date.getMinutes()
 
  let updateSecond = date.getSeconds()
 
  
 
 let updateAMPM = updateHour < 13 ? 'AM' : 'PM'
 
  if(updateMinute < 10) updateMinute = `0${updateMinute}`
 
  if(updateSecond < 10) updateSecond = `0${updateSecond}`
 
  let updateTime = `${updateHour}:${updateMinute}:${updateSecond} ${updateAMPM}`
 
  
 
 this.setState({time: updateTime})
  }


  componentDidMount(){
    this.loadInterval=setInterval(this.dateFunction,1000)
  }

  componentDidCatch(){
    clearInterval(this.loadInterval)
  }

  render(){
    return(
      <div>
        <div className="Clock">

        <h3 id="time">{this.state.time}</h3>
        </div>
      </div>
    )
  }
}

export default App;
