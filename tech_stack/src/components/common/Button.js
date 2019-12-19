//Import library for making a component
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

///Making a component
const Button = props => {
	const { textStyle, buttonStyle } = styles;
	return (
		<TouchableOpacity onPress={props.onPress} style={buttonStyle}>
			<Text style={textStyle}>{props.title}</Text>
		</TouchableOpacity>
	);
};

//Style for component
const styles = {
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		borderColor: '#007aff',
		borderRadius: 5,
		borderWidth: 1,
		backgroundColor: '#fff',
		marginLeft: 5,
		marginRight: 5 
	},
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
};

//Make component available for other parts of the app
export { Button };
