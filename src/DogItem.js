import React, { Component } from 'react'
import axios from 'axios'

class DogItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
          image: this.props.image || ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        axios.get('https://dog.ceo/api/breeds/image/random', {
            params: {
                id: this.props.id,
                image: this.state.image
              }
        })
      .then((res) => {
          this.props.setDog(res.data.dogs[0].dog, this.state.image)
          this.props.history.push('/dogs')
      })
      .catch((err) => {
        console.log(err)
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
