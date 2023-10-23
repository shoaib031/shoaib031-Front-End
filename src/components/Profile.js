import React from 'react'

class Profile extends React.Component {
    testfun(){
alert("testfun")
    }
  render() {
    return (
      <div>
      <h1>Profile</h1>
      <button onClick={this.testfun.bind()}>Click me</button>
      </div>
    )
  }
}

export default Profile