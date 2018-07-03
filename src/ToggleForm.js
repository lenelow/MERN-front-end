import React, { Component } from 'react'

class ToggleForm extends Component {
    constructor (props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    handleUpdateClick = () => {
        this.openForm()
    }

    handleForm = () => {
        this.closeForm()
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
                    id={this.props._id}
                    text={this.props.text}
                    onFormSubmit={this.handleSubmit}
                    onHandleForm={this.handleForm}
                />
            )

        } else {
            return(
                <DogItem
                    id={this.props._id}
                    text={this.props.text}
                    onHandleUpdateClick={this.handleUpdateClick} 
                />
            )
        }
    }
}

export default ToggleForm