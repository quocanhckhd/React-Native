import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
class DrawerMenu extends Component {
	render() {

		const { textStyle, buttonStyle, containerStyle } = styles;

		return (
		<View style={containerStyle}>
			<ScrollView 
				style={{ 
					paddingTop: 0, 
					paddingBottom: 0, 
					borderColor: '#e37200',
					borderRightWidth: 3
				}}
			>
				<View 
					style={{ 
						marginTop: 0, 
						paddingLeft: 10, 
						height: 25, 
						backgroundColor: '#ebf3f5', 
						paddingTop: 5 
					}}
				>
					<Text
						style={{
							color: '#000',
							fontSize: 12,
							fontFamily: 'Helvetica'
						}}
					>CURRENT DESTINATION
					</Text>
				</View>

				<View 
					style={{ 
							marginTop: 0, 
							marginBottom: 0, 
							flex: 1, 
							backgroundColor: '#07d9e', 
							paddingLeft: 10, 
							height: 50, 
							flexDirection: 'row' 
					}}
				>
					<View style={{ flex: 1, paddingTop: 15 }}>
						<Text>
							<Icon type="entypo" name="location-pin" size={20} color="#fff" />
						</Text>
					</View>
					<View style={{ flex: 4, paddingTop: 15 }}>
						<Text style={textStyle}>
							HaNoi
						</Text>
					</View>
					<View style={{ flex: 1, paddingTop: 10, paddingRight: 35 }}>
						<TouchableOpacity 
							style={buttonStyle} 
							onPress={() => this.props.navigation.navigate('ChangeDestination')}
						>
							<Text style={{ fontSize: 12, color: '#fff' }}>
								Change
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View 
					style={{ 
						paddingTop: 5, 
						marginTop: 0, 
						marginBottom: 0, 
						paddingLeft: 10, 
						height: 25, 
						backgroundColor: '#ebf3f5', 
					}}
				>
					<Text
						style={{
							color: '#000',
							fontSize: 12,
							fontFamily: 'Helvetica'
						}}
					>MY ACCOUNT
					</Text>
				</View>

				<View 
					style={{ 
						marginTop: 0, 
						marginBottom: 0, 
						flex: 1, 
						backgroundColor: '#07d9e', 
						paddingLeft: 10, 
						height: 50, 
						flexDirection: 'row' 
					}}
				>
					<View style={{ flex: 1, paddingTop: 15 }}>
						<Text>
							<Icon type="simple-line-icons" name="pencil" size={20} color="#fff" />
						</Text>
					</View>
					<View style={{ flex: 5, paddingTop: 15 }}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
							<Text style={textStyle}>
								Sign Up
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View 
					style={{ 
						marginTop: 0, 
						marginBottom: 0, 
						flex: 1, 
						backgroundColor: '#07d9e', 
						paddingLeft: 10, 
						height: 50, 
						flexDirection: 'row' 
					}}
				>
					<View style={{ flex: 1, paddingTop: 15 }}>
						<Text>
							<Icon type="ionicon" name="ios-log-in" size={20} color="#fff" />
						</Text>
					</View>
					<View style={{ flex: 5, paddingTop: 15 }}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
							<Text style={textStyle}>
								Log In
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View 
					style={{ 
						marginTop: 0, 
						marginBottom: 0, 
						flex: 1, 
						backgroundColor: '#07d9e', 
						paddingLeft: 10, 
						height: 50, 
						flexDirection: 'row' 
					}}
				>
					<View style={{ flex: 1, paddingTop: 15 }}>
						<Text>
							<Icon type="zocial" name="cart" size={20} color="#fff" />
						</Text>
					</View>
					<View style={{ flex: 5, paddingTop: 15 }}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
							<Text style={textStyle}>
								My Shopping Cart
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View 
					style={{ 
						marginTop: 0, 
						marginBottom: 0, 
						flex: 1, 
						backgroundColor: '#07d9e', 
						paddingLeft: 10, 
						height: 50, 
						flexDirection: 'row' 
					}}
				>
					<View style={{ flex: 1, paddingTop: 15 }}>
						<Text>
							<Icon type="ionicon" name="ios-heart-empty" size={20} color="#fff" />
						</Text>
					</View>
					<View style={{ flex: 5, paddingTop: 15 }}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('MyWishList')}>
							<Text style={textStyle}>
								My Wishlist
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View 
					style={{ 
						marginTop: 0, 
						marginBottom: 0, 
						flex: 1, 
						backgroundColor: '#07d9e', 
						paddingLeft: 10, 
						height: 50, 
						flexDirection: 'row' 
					}}
				>
					<View style={{ flex: 1, paddingTop: 10 }}>
						<Text>
							<Icon type="ionicon" name="ios-checkmark" size={40} color="#fff" />
						</Text>
					</View>
					<View style={{ flex: 5, paddingTop: 15 }}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('MyBookings')}>
							<Text style={textStyle}>
								My Bookings
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View 
					style={{ 
						marginTop: 0, 
						marginBottom: 0, 
						flex: 1, 
						backgroundColor: '#07d9e', 
						paddingLeft: 10, 
						height: 50, 
						flexDirection: 'row' 
					}}
				>
					<View style={{ flex: 1, paddingTop: 15 }}>
						<Text>
							<Icon type="font-awesome" name="usd" size={20} color="#fff" />
						</Text>
					</View>
					<View style={{ flex: 4, paddingTop: 15 }}>
						<Text style={textStyle}>
							Currency: USD
						</Text>
					</View>
					<View style={{ flex: 1, paddingTop: 10, paddingRight: 35 }}>
						<TouchableOpacity 
							style={buttonStyle} 
							onPress={() => this.props.navigation.navigate('ChangeDestination')}
						>
							<Text style={{ fontSize: 12, color: '#fff' }}>
								Change
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={{ paddingTop: 5, paddingLeft: 10, height: 25, backgroundColor: '#ebf3f5', }}>
					<Text
						style={{
							color: '#000',
							fontSize: 12,
							fontFamily: 'Helvetica'
						}}
					>CUSTOMER SUPPORT
					</Text>
				</View>

				<View 
					style={{ 
						marginTop: 0, 
						marginBottom: 0, 
						flex: 1, 
						backgroundColor: '#07d9e', 
						paddingLeft: 10, 
						height: 50, 
						flexDirection: 'row' 
					}}
				>
					<View style={{ flex: 1, paddingTop: 10 }}>
						<Text>
							<Icon type="ionicon" name="ios-help" size={40} color="#fff" />
						</Text>
					</View>
					<View style={{ flex: 5, paddingTop: 15 }}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('HelpAndContact')}>
							<Text style={textStyle}>
								Help & Contact
							</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View 
					style={{ 
						marginTop: 0, 
						flex: 1, 
						backgroundColor: '#07d9e', 
						paddingLeft: 10, 
						height: 170, 
						flexDirection: 'row' 
					}}
				>
					<View style={{ flex: 1, paddingTop: 15 }}>
						<Text>
							<Icon type="ionicon" name="ios-information-circle" size={20} color="#fff" />
						</Text>
					</View>
					<View style={{ flex: 5, paddingTop: 15 }}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
							<Text style={textStyle}>
								About Viator
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				
			</ScrollView>
				<View style={{ position: 'relative', zIndex: 1000, marginBottom: 0 }}>
					<Image source={require('./viator.png')} style={{ width: 280, height: 40 }} />
				</View>
		</View>
		);
	}
}

const styles = {
	textStyle: {
		fontFamily: 'Helvetica',
		fontSize: 14,
		color: '#fff'
	},
	buttonStyle: {
		height: 30,
		borderWidth: 1,
		borderColor: '#fff',
		borderRadius: 5,
		width: 60,
		paddingTop: 5,
		paddingLeft: 10

	},
	containerStyle: {
		flex: 1
	}
};

export default DrawerMenu;
