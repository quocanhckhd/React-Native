import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Product from './Product/Product';
import data from './Product/tikiDeal.json';

class TikiDeal extends Component {

//go to product detail to view detail of product
	onButtonPress = id => {
		this.props.navigation.navigate('ProductDetail');
		this.props.showProductDetail(id);
	}

	render() {
		const { containerStyle, leftContainerStyle, rightContainerStyle } = styles;

		const leftSide = data.products.filter(product => (product.id % 2 === 0));
		const rightSide = data.products.filter(product => (product.id % 2 !== 0));
		const list = leftSide.map((product) => {
			const discount = (product.newPrice / product.oldPrice) * 100;
			return (
				<View key={product.id}>
					<TouchableOpacity key={product.id} onPress={() => this.onButtonPress(product.id)}>
						<Product 
							key={product.id}
							source={product.image}
							name={product.name}
							newPrice={product.newPrice}
							oldPrice={product.oldPrice}
							discount={discount}
							navigation={this.props.navigation}
						/>
					</TouchableOpacity>
				</View>
			);
		});

		const list1 = rightSide.map((product) => {
			const discount = (product.newPrice / product.oldPrice) * 100;
			return (
				<View key={product.id}>
					<TouchableOpacity key={product.id} onPress={() => this.onButtonPress(product.id)}>
						<Product 
							key={product.id}
							source={product.image}
							name={product.name}
							newPrice={product.newPrice}
							oldPrice={product.oldPrice}
							discount={discount}
							navigation={this.props.navigation}
						/>
					</TouchableOpacity>
				</View>
			);
		});

		return (
			<View style={containerStyle}>
				<View style={leftContainerStyle}>
					{ list }
				</View>	
				<View style={rightContainerStyle}>
					{ list1}
				</View>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		height: 1250,
		width: '100%',
		flexDirection: 'row',
	},
	leftContainerStyle: {
		flexDirection: 'column'
	},
	rightContainerStyle: {
		flexDirection: 'column'
	}
};

const mapStateToProps = state => {
	const { id } = state.title;
	return { id };
};

const mapDispatchToProps = dispatch => ({
	showProductDetail: id => dispatch(actions.showProductDetail(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TikiDeal);
