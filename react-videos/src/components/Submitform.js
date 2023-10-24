import React from "react";

export default class Submitform extends React.Component {
    constructor(){
        super()
        this.state = {
           user : null,
           password : null
        }
    }
  render() {
    return (
      <div>
      <h1>Submitform</h1>
      <input type = "text" name="user" />
      <br /><br />
      <input type = "password" name="password"  />
      <br /><br />
      <button>Submit</button>
      </div>
    )
  }
}
