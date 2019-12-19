//Import library for making a component
import React, { Component } from 'react';
import { View } from 'react-native';

///Making a component
class Card extends Component {
	render() {
		const { containerStyle } = styles;
		return (
			<View style={containerStyle}>
				{this.props.children}
			</View>
		);
	}
}

//Style for component
const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginTop: 10,
		marginRight: 5,
		marginLeft: 5
	}
};

//Make component available for other parts of the app
export { Card };
