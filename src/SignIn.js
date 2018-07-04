import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        body: '',
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        console.log(this.props)
        this.props.user.uid = this.state.body
        this.props.user.login = 'true'
       
    }
    handleChange = (ev) => {
        this.setState({ body: ev.target.value })
    }

    render() {
        return (
            <form className="SignIn" onSubmit={this.handleSubmit}>
                <label>Please Sign In!</label>
                <input 
                    type="text"
                    placeholder="User Name"
                    onChange={this.handleChange}
                />
                <button type="submit">Log In</button>
            </form>
        )
    }
}

export default SignIn