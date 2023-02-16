// from https://github.com/mwaz/jest-snapshot-testing
// https://circleci.com/blog/snapshot-testing-with-jest/ 

import React from 'react'
import './App.css';
import Counter from './Counter'

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;