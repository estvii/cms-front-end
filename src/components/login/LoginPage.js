import React, { Component } from 'react';
import axios from 'axios';

import { withRouter } from 'react-router-dom';
import { setAuthToken } from './../../actions';
import { connect } from 'react-redux';

class LoginPage extends Component {
	state = {
		email    : '',
		password : ''
	};

  // This runs when form is submitted
	onFormSubmit = (event) => {
		event.preventDefault();
		const { email, password } = this.state;

		axios
			.post('http://localhost:3000/login', { email, password })
			.then((response) => {
				this.props.setAuthToken(response.data);
				this.props.history.push('/clients');
			})
			.catch((err) => console.log(err));
	};

  // this handles the state when values are changed within the form input field
	handleInputChange = (event) => {
		const { value, name } = event.target;
		this.setState({
			[name] : value
		});
	};

	render() {
		return (
      <div className="ui column stackable center page grid">
              <div className="four wide column"></div>
              <div className="ui six wide column form segment">
  
			<form onSubmit={this.onFormSubmit}>
				<h1>Login Below!</h1>
				<input
					type="email"
					name="email"
					placeholder="Enter email"
					value={this.state.email}
					onChange={this.handleInputChange}
					required
				/>
				<input
					type="password"
					name="password"
					placeholder="Enter password"
					value={this.state.password}
					onChange={this.handleInputChange}
					required
				/>
				<input type="submit" value="Submit" />
			</form>
      </div>
            </div>
		);
	}
}

export default connect(null, {
	setAuthToken
})(withRouter(LoginPage));