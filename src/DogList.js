import React, { Component } from 'react'
import FormValue from './FormValue'

class DogList extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const dogs = this.props.dogs.map(dog => (
      <FormValue
        key={dog._id}
        id={dog._id}
        image={dog.image}
        name={dog.name}
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
