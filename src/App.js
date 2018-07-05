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
        login: false,
      } 
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.login ? (
          <Main user={this.state.user} />
        ) : (
          <SignIn user={this.state.user}/>
        )}
      </div>
      )
    }
  }


export default App
