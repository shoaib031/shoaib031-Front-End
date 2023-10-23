import React, { Component } from 'react'

export class Didmount extends Component {
    constructor()
    {
        super()
        this.state={
            data:null
        }
        console.warn("constructor")
    }
    componentDidMount(){
        this.setState({data: "updated"})
        console.warn("componentDidMount")
    }
  render() {
    console.warn("render")
    return (
      <div>Didmount</div>
    )
  }
}

export default Didmount