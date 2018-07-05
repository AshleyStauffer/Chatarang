import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        body: '',
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        console.log(this.props)
        this.props.user.uid = this.state.body
        this.props.user.login = true
    }
    handleChange = (ev) => {
        this.setState({ body: ev.target.value })
    }

    render() {
        return (
            <form className="SignIn" onSubmit={this.handleSubmit} style={styles.form}>
                <label style={styles.label}>Please Sign In!</label>
                <input 
                    type="text"
                    placeholder="User Name"
                    onChange={this.handleChange}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Log In</button>
            </form>
        )
    }
}

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        textAlign: 'center',
        margin: '1.5rem',
        fontSize: '4vw',
    },
    input: {
        width: '15rem',
        margin: '1rem',
        padding: '.25rem',
        textAlign: 'center'
    },
    button: {
        width: '5rem',
        padding: '.5rem',
        backgroundColor: '#236ce0',
        border: 'none',
        borderRadius: '.25rem',
    }
}
export default SignIn