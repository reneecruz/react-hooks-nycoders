import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Button } from "react-bootstrap";

export default function UserForm() {
 
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

      // const {name, username, email} = this.state

    return (
      <Container>
        <form
          onSubmit={e =>
            this.props.addUser(
              e,
              this.state.name,
              this.state.username,
              this.state.email
            )
          }
        >

        <label>Username</label>
        <input
          type="text"
          value={this.state.username}
          name="username"
          placeholder="username"
          onChange={(e)=>this.handleChange(e)}
        />

          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            name="name"
            placeholder="name"
            onChange={(e)=>this.handleChange(e)}
          />

          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            name="email"
            placeholder="email"
            onChange={(e)=>this.handleChange(e)}
          />

          <Button type="submit">
            Submit
          </Button>
        </form>
      
      </Container>
    );
}

UserForm.propTypes = {
  addUser: PropTypes.func.isRequired
};
