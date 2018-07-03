import React, { Component } from 'react'
import ToggleForm from './ToggleForm'

class DogList extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const dogs = this.props.dogs.map(dog => (
      <ToggleForm
        key={dog._id}
        text={dog.text}
        onHandleCreate={this.props.onHandleCreate}
        onHandleUpdate={this.props.onHandleUpdate} 
        onHandleDelete={this.props.onHandleDelete} 
      />
    ))
    return (
      <div>
        {dogs}
      </div>
    )
  }
}

export default DogList
