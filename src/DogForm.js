import React, { Component } from 'react'
import FormValue from './FormValue'
import './DogForm.css'
import './normalize.css'

class DogForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: this.props.image || '',
      name: this.props.name || ''
    }
  }
  handleFormSubmit = () => {
    this.props.onFormSubmit({
      _id: this.props.id,
      image: this.state.image,
      name: this.state.name
    })
  }  
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleDelete = () => {
      this.props.onHandleDelete(this.props.id)
  }
  render() {
      const submitImage = this.props.id ? 'Update' : 'Create';
      return (  
      <div>
          <div className='label'>
              <label>Your Dog</label>
          </div>
          <label>Name</label>
          <input
            name='name'
            type='text'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label>Photo</label>
          <input
              name='image'
              type='text'
              value={this.state.image}
              onChange={this.handleChange}
          />
          <div className='openCloseButtons'>
              <button onClick={this.handleFormSubmit}>
                  {submitImage}
              </button>
              <button onClick={this.props.onFormClose}>
                  Done
              </button>
          </div>
      </div>
      )
  }
}

export default DogForm
