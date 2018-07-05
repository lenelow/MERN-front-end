import React, { Component } from 'react'
import DogForm from './DogForm'
import DogItem from './DogItem'

class FormValue extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }
  handleSubmit = (dog) => {
    this.props.onHandleUpdate(dog)
    this.closeForm()
  }
  closeForm = () => {
    this.setState({
      isOpen: false
    })
  }
  openForm = () => {
    this.setState({
      isOpen: true
    })
  }
  render () {
      if (this.state.isOpen) {
        return(
          <DogForm 
            id={this.props.id}
            image={this.props.image}
            name={this.props.name}
            onFormSubmit={this.handleSubmit}
            onFormClose={this.closeForm}
          />
        )
      } else {
        return(
          <DogItem
            id={this.props.id}
            image={this.props.image}
            name={this.props.name}
            onHandleDelete={this.props.onHandleDelete}
            onFormOpen={this.openForm}
          />
        )
      }
    
  }
}

export default FormValue
