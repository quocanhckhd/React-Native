import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from 'react-native-elements';

class Search extends Component {

	// static navigationOptions = ({ navigation }) => {
	// 	return {
	// 		headerLeft: (
	// 			<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
	// 				<Text>
	// 					<Ionicons color="#fff" size={25} name="md-menu" />
	// 				</Text>
	// 			</TouchableOpacity>
	// 		),
	// 		headerRight: (
	// 			<TouchableOpacity onPress={() => navigation.navigate('Change')}>
	// 				<Text
	// 					style={{
	// 						fontFamily: 'Nunito',
	// 						fontWeight: '100'
	// 					}}
	// 				>Change</Text>
	// 			</TouchableOpacity>
	// 		),
	// 		tabBarVisible: false
	// 	};
	// };

	render() {
		return (
			<View>
				
				<ScrollView>
					<Text>Search</Text>
				</ScrollView>
			</View>
		);
	}
}

export default Search;
