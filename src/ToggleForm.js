import React, { Component } from 'react'
import DogForm from './DogForm'
import DogItem from './DogItem'

class ToggleForm extends Component {
    constructor (props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    handleSubmit = (dog) => {
        this.props.onHandleCreate(dog)
        this.closeForm()
    }

    closeForm = () => {
        this.setState({ isOpen: false })
    }

    openForm = () => {
        this.setState({ isOpen: true })
    }

    render () {
        if (this.state.isOpen) {
            return (
                <DogForm 
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.closeForm}
                />
            )
        } else {
            return(
                <button onClick={this.openForm}>Add</button>
            )
        }
    }
}

export default ToggleForm