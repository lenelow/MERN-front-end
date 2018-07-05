import React, { Component } from 'react'
import './App.css'
import DogList from './DogList'
import DogItem from './DogItem'
import ToggleForm from './ToggleForm'
import axios from 'axios'

class App extends Component {
  constructor () {
    super()

    this.state = {
      dogs: []
    }
  }

  componentDidMount () {
    let origin = 'http://localhost:4001'
    axios.get(`${origin}/api/dogs`)
      .then(res => {
        this.setState({
          dogs: res.data
        })
      }).catch(err => {
        console.error(err)
      })
  }

  handleCreate = (dog) => {
    let origin = 'http://localhost:4001'
    this.setState(({dogs}) => ({
      dogs: dogs.concat(dog)
    }))
    axios.post(`${origin}/api/dogs`, dog)
    .then(res => res.data)
    .catch(err => {
      console.error(err)
    })
  }

  handleDelete = (dogId) => {
    let origin = 'http://localhost:4001'
    this.setState(({dogs}) => ({
      dogs: dogs.filter(dog => dog._id !== dogId)
    }))
    axios.delete(`${origin}/api/dogs/${dogId}`)
    .then(res => res.data)
    .catch(err => {
      console.error(err)
    })
  }

  handleUpdate = (dog) => {
    let origin = 'http://localhost:4001'
    this.setState(({dogs}) => ({
      dogs: dogs.map(picture => {
        if (dog._id === picture.id) {
          picture = dog
          return picture 
        } else {
          return picture
        }
      })
    }))
    axios.put(`${origin}/api/dogs/${dog._id}`, dog)
    .then(res => res.data)
    .catch(err => {
      console.error(err)
    })
  }

  render () {
    return (
      <div>
        <div className='App'>
          <header className='App-header'>
            <h1 className='title'>Dog List Generator</h1>
          </header>
        </div>

        <div>
          <DogList 
            dogs={this.state.dogs}
            onHandleUpdate={this.handleUpdate} 
            onHandleDelete={this.handleDelete}
          />
        </div>
        <div>
          
        </div>
        <div>
            <ToggleForm 
              onHandleCreate={this.handleCreate}
            />
        </div>
      </div>
    )
  }
}

export default App
