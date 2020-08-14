import React, { Component } from 'react'
import Axios from 'axios'
import ErrorImage from 'images/github404.png'

class Forms extends Component {

    state = {
        userName: ''
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        await Axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then(res => {
            this.props.onSubmit(res.data)
            console.log(res.data);
        })
        .catch(e => {
           console.log("error");
           console.log("error ", e);
           
           const data = {
            avatar_url: ErrorImage,
            name: 'Error 404',
            company: "Matrix",
            html_url: "https://github.com/nos"
           }

           this.props.onSubmit(data)
         })
        
        this.setState({ userName: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
               <div className="input-group mb-3">
                  <div className="input-group-prepend">
                     <span className="input-group-text" id="basic-addon1"><i className="fa fa-github-alt"></i></span>
                  </div>
                  <input 
                    type="text" 
                    className="form-control"
                    onChange={ (e) => this.setState({userName: e.target.value}) }
                    value={this.state.userName} 
                    placeholder="Github Username" 
                    aria-label="Username" aria-describedby="basic-addon1" required /> 
               </div>
               <button type="button" onClick={this.handleSubmit} className="btn btn-success">Add Card</button>
            </form>
        )
    }
}

export default Forms

    // userNameInput = React.createRef() 
    // ref={this.userNameInput}