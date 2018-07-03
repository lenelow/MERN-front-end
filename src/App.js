import React, { Component } from 'react'
import './App.css'
import DogList from './DogList'
import axios from 'axios'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dogs: []
    }
  }

  componentDidMount () {
    axios.get('localhost:4001/api/dogs')
      .then(res => {
        this.setState({
          dogs: res.data
        })
      }).catch(err => {
        console.error(err)
      })
  }

  handleCreate () {

  }

  handleDelete () {

  }

  handleUpdate () {

  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Looking for a new best friend? We're here to help</h1>
          <h1 className='title'>Dog Generator</h1>
        </header>
        <DogList dogs={this.state.dogs} />
      </div>
    )
  }
}

export default App
