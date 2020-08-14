import React, { Component } from 'react'

class Cards extends Component {
    render() {
        const profile = this.props
        return (
            <div className="card mb-3 cards">
             <div className="row no-gutters">
              <div className="col-md-4">
                <img src={profile.avatar_url} className="card-img" alt="profile" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{profile.name ? profile.name : 'No name in Database'}</h5>
                  <p className="card-text">{profile.html_url}</p>
                  <p className="card-text">
                      <small className="text-muted"> 
                       <i className="fa fa-building"></i> 
                       {profile.company ? profile.company : 'Not Yet'}
                      </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Cards
