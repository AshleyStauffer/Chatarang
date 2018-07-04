import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      user: {
        uid: 'SDjkfj',
        displayName: 'Ashley',
        email: 'astauffer@pitt.edu',
        login: 'false',
      } 
    }
  }
  render() {
    if (!this.login) {
      return (
        <div className="App">
          <SignIn user={this.state.user}/>
        </div>
        )
    } else {
      return (
        <div className="App">
          <Main user={this.state.user} />
        </div>
      )
    }
  }
}

export default App
