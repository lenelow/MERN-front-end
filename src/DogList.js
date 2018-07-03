import React, { Component } from 'react'
import DogItem from './DogItem'

class DogList extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const dogs = this.props.dogs.map(dog => (
      <DogItem
        key={dog._id}
        text={dog.text}
      />
    ))
  }
}

export default DogList
