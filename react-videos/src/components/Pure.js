import React, { Component  } from 'react'
 class Pure extends Component {
    constructor(){
        super()
        this.state={
            data:10
        }
    }
  render() {
    console.warn(this.state)
    return (
    <div>
    Pure {this.state.data}
    <button onClick = {()=> {this.setState({data:50})}}>Click Me</button>
    </div>
    )
  }
}

export default Pure;