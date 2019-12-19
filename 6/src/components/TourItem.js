
import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

class TourItem extends Component {
	render() {
		const { itemContainerStyle, imageStyle, titleStyle, ratingStyle,
				priceStyle, priceContainerStyle, viewCountStyle } = styles;
		return (
			<View style={itemContainerStyle}>
				<ImageBackground style={imageStyle} source={{ uri: this.props.image || 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}>
					<Text>{this.props.type}</Text>
				</ImageBackground>
				<Text style={titleStyle}>{this.props.title}</Text>
				<Text style={ratingStyle}>{this.showRating}</Text>
				<Text style={viewCountStyle}>{this.props.views}</Text>
				<View style={priceContainerStyle}>
					<Text style={priceStyle}>from ${this.props.price}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	itemContainerStyle: {
		margin: 15,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center',
	},
	imageStyle: {
		width: '100%',
		height: 120
	},
	titleStyle: {
		fontFamily: 'Helvetica',
		fontWeight: '100',
		fontSize: 12,
		color: '#f7f7f7'
	},
	ratingStyle: {
		flexDirection: 'row',
	},
	priceContainerStyle: {

	},
	priceStyle: {
		fontSize: 12,
		fontWeight: '100',
		color: '#f7f7f7',
		fontFamily: 'Helvetica'
	},
	viewCountStyle: {
		fontWeight: '100',
		fontSize: 12,
		color: '#f7f7f7'
	}
});

export default TourItem;
