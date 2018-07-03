import React, { Component } from 'react'
import axios from 'axios'

class DogItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
          image: this.props.image || ''
        }
    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        axios.get('https://dog.ceo/api/breeds/image/random', {
            params: {
                id: this.props.id,
                image: this.state.image
              }
        })
        .then((res) => {
          this.setState({
              image: res.data.message
          })
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
                onChange={this.handleChange.bind(this)}
            />
            <div className='openCloseButtons'>
                <button onClick={this.handleFormSubmit.bind(this)}>
                    {submitImage}
                </button>
                <button onClick={this.props.onFormClose.bind(this)}>
                    Done
                </button>
            </div>
        </div>
        )
    }
    
}

export default DogItem
