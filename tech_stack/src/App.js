
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

class App extends Component {
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Header headerText="Tech Stack" />
					<LibraryList libraries={libraries} />
				</View>
			</Provider>
		);
	}
}

const mapStateToProps = state => ({
	libraries: state.libraries
});

export default connect(mapStateToProps)(App);
