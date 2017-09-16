import React, { Component } from 'react'
import '../styles.scss'

import Clock from './Clock.jsx'

class App extends Component {

  render() {
    return (
      <div>
        <header>
          <h1>Page header</h1>
        </header>
        <Clock />
        <main>
          <div>
            <p>Page Content 1</p>
          </div>
        </main>
        <footer>Page footer</footer>
      </div>
    )
  }
}

export default App