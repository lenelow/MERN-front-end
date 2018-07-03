import React, { Component } from 'react'

class DogItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
          image: this.props.image || ''
        }
    }
    handleSubmit = () => {
        this.props.handleFormSubmit({
          id: this.props.id,
          image: this.state.image
        })
      }
      
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    render() {
        const submitImage = this.props.id ? 'Update' : 'Create';
        return (  
        <div>
            <label>Your Dog</label>
            <input
                type='image'
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

export default DogItem
