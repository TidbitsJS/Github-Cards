import React, { Component } from 'react'

class Cards extends Component {
    render() {
        const profile = this.props
        return (
            <div className="container">
            <div className="github-profile">
                <img src={profile.avatar_url} alt="profile" />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.html_url}</div>
                </div>
            </div>
            </div>
        )
    }
}

export default Cards
