import React, { Component } from 'react'
import Axios from 'axios'

class Forms extends Component {

    state = {
        userName: ''
    }

    // userNameInput = React.createRef() 
    // ref={this.userNameInput}

    handleSubmit = async (event) => {
        event.preventDefault()
        const resp = await Axios.get(`https://api.github.com/users/${this.state.userName}`)
        this.props.onSubmit(resp.data)
        this.setState({ userName: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <input type="text" 
                      placeholder="Github UserName"
                      onChange={ (e) => this.setState({userName: e.target.value}) }
                      value={this.state.userName} required />
              <button>Add Card</button>
            </form>
        )
    }
}

export default Forms
