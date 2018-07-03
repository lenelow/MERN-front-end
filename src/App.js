import React, { Component } from 'react'
import './App.css'
import DogList from './DogList'
import DogForm from './DogForm'
import DogItem from './DogItem'
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

  handleCreate = (dog) => {
    this.setState(({dogs}) => ({
      dogs: dogs.concat(dog)
    }))
    axios.post('localhost:4001/api/dogs', dog)
    .then(res => res.data)
    .catch(err => {
      console.error(err)
    })
  }

  handleDelete = (dogId) => {
    this.setState(({dogs}) => ({
      dogs: dogs.filter(dog => dog._id !== dogId)
    }))
    axios.delete(`localhost:4001/api/dogs/${dogId}`)
    .then(res => res.data)
    .catch(err => {
      console.error(err)
    })
  }

  handleUpdate = (dogId, dog) => {
    this.setState(({dogs}) => ({
      dogs: dogs.map(picture => {
        if (dog._id === dogId) {
          picture = dog
          return picture 
        } else {
          return picture
        }
      })
    }))
    axios.put(`localhost:4001/api/dogs/${dogId}`, dog)
    .then(res => res.data)
    .catch(err => {
      console.error(err)
    })
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='slogan'>Want to look at some cute pups? We're here to help</h1>
          <h1 className='title'>Dog Generator</h1>
        </header>
        <DogList 
          dogs={this.state.dogs}
          onHandleCreate={this.handleCreate}
          onHandleUpdate={this.handleUpdate} 
          onHandleDelete={this.handleDelete}  
        />
        <DogItem />
        <DogForm />
      </div>
    )
  }
}

export default App
