import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

	constructor(props) {
		super(props);
	
		this.state = {
			loggedIn: false
		};
	}

	componentWillMount() {
		const firebaseConfig = {
			apiKey: 'AIzaSyDrg6U2s2v17XxMxTJ3ERUjLm4ylufzeGk',
			authDomain: 'authentication-dd17e.firebaseapp.com',
			databaseURL: 'https://authentication-dd17e.firebaseio.com',
			projectId: 'authentication-dd17e',
			storageBucket: 'authentication-dd17e.appspot.com',
			messagingSenderId: '718159726713',
			appId: '1:718159726713:web:3007946ed6a44c20'
		};
		// Initialize firebase
		firebase.initializeApp(firebaseConfig);

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent = () => {
		switch (this.state.loggedIn) {
			case true:
				return <Button title="Log Out" />;
			case false: 
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
