import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			password: '',
			email: '', 
			error: '',
			loading: false
		};
	}

	onLoginSuccess = () => {
		this.setState({ email: '', password: '', loading: false, error: '' });
	}

	onButtonPress = () => {
		const { email, password } = this.state;

		this.setState({ error: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(this.onLoginSuccess.bind(this))
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(this.onLoginFail.bind(this));
		});
	}

	onLoginFail = () => {
		this.setState({ error: 'Authentication Failed.', loading: false });
	}


	renderButton = () => {
		if (this.state.loading) {
			return (
				<CardSection>
					<Spinner size="small" />
				</CardSection>
			);
		}

		return (
			<CardSection>
				<Button onPress={this.onButtonPress} title="Log In" />
			</CardSection>
		);
	};

	render() {
		const { errorTextStyle } = styles;

		return (
			<Card>
				<CardSection>
					<Input 
						secureTextEntry={false}
						placeholder="user@gmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>
				<CardSection>
					<Input 
						secureTextEntry
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>
					<Text style={errorTextStyle}>{this.state.error}</Text>				
					{this.renderButton()}
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;
