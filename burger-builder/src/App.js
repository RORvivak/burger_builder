import React, { Component } from 'react';
import User from "./User";
import axios from 'axios'

class App extends Component {
  
  constructor(){
    super()
    this.state = {
        name: "",
        job: ""
    }
  }
  
  change = (event) =>{
    const {name, value} = event.target
    let user = Object.assign({}, this.state)
    user[name] =  value 
    this.setState(user)
    console.log(user)
    return false
  }

  submit = (event) =>
  {   
    event.preventDefault()
    let user = Object.assign({}, this.state)
    axios.post("https://reqres.in/api/users", {"name": user.name, "job": user.job}).then(
      res => console.log(res)

    ).catch(
      res => console.log(res)
    )
    return false;
  }

  render() {
    return (
      <div>
        <User change={this.change} submit = {this.submit}></User>
      </div>
    );
  }
}

export default App;
