import React, { Component } from 'react'
import 'App.css'
import CardList from 'components/CardList'
import Forms from 'components/Forms'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: []
    }
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>The Github Cards App</h1>
        <Forms  onSubmit={this.addNewProfile}/>
        <CardList profile={this.state.profiles} />
      </div>
    )
  }
}

export default App