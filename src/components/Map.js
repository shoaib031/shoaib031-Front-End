import React, { Component } from 'react'

 class Map extends React.Component {
    constructor(){
        super();
        this.state={
            list:[
                {name: 'Shoaib', phone: '111', email: 'shoaib@test.com'},
                {name: 'Moheed', phone: '122', email: 'moheed@test.com'},
                {name: 'Mughees', phone: '133', email: 'mughees@test.com'}
            ]
        }
    }
  render() {
    return (
      <div>
      <h1>Listining with Map</h1>
      {
        this.state.list.map((item)=>
        <div>
        <span>Name: {item.name} Email: {item.phone}</span> 
        </div>
        )
      }
      </div>
    )
  }
}

export default Map