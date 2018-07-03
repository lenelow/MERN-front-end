import React, { Component } from 'react'
import FormValue from './FormValue'
import './DogForm.css'
import './normalize.css'

class DogForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }
  handleFormOpen = () => {
    this.setState({
        isOpen: true
    })
  }
  handleFormClosed = () => {
    this.setState({
        isOpen: false
    })
  }
  handleFormSubmit = (dog) => {
    this.props.onFormSubmit(dog)
    this.setState({
        isOpen: false
    })
  }
  render () {
      if (this.stateIsOpen) {
          return(
              <FormValue 
                onFormSubmit={this.handleFormSubmit}
                onFormClose={this.handleFormClosed}  
              />
          )
      } else {
          return(
              <div className='button'>
                <button onClick={this.handleFormOpen}>
                  Generate Dog 
                </button>
              </div>
          )
      }
  }
}

export default DogForm
