import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState(state => ({
      counter: state.counter + 1
    }))
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <span>{counter}</span>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
  
}

export default App
