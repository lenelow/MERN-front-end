import React, { Component } from 'react'
import DogForm from './DogForm'
import './DogItem.css'
import './normalize.css'
import axios from 'axios'

class DogItem extends Component {
    constructor () {
        super()

    }

    handleDelete = () => {
        this.props.onHandleDelete(this.props.id)
    }

    render () {
        return(
            <div>
                <h2>{this.props.name}</h2>
                <img src={this.props.image}/>
                <button onClick={this.props.onFormOpen}>Update</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
    
}

export default DogItem
