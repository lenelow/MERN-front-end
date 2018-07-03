import React, { Component } from 'react'

class DogItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
          text: this.props.text || ''
        }
    }
    handleSubmit = () => {
        this.props.onFormSubmit({
          id: this.props.id,
          text: this.state.text
        })
      }
      
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    render() {
        const submitText = this.props.id ? 'Update' : 'Create';
        return (  
        <div>
            <label>Text</label>
            <input
                name='text'
                type='text'
                value={this.state.text}
                onChange={this.handleChange}
            />
            <div className='openCloseButtons'>
                <button onClick={this.handleSubmit}>
                    {submitText}
                </button>
                <button onClick={this.props.onFormClose}>
                    Cancel
                </button>
            </div>
        </div>
        )
    }
    
}

export default DogItem
