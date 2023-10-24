import React from "react"

class Ref extends React.Component {
constructor(){
    super()
    this.userRef = React.createRef();
}
editval(){
  this.userRef.current.focus()
}
  render() {
    return (
      <div>
      <input ref={this.userRef} type="text" name="user" />
      <button onClick={() =>this.editval()} >Click Me</button>
      </div>
    )
  }
}

export default Ref