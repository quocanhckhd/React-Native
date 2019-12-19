//
import React, { Component } from 'react';
import { StatusBar, TouchableOpacity, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Icon } from 'react-native-elements';
import {  
		createStackNavigator,
		createMaterialTopTabNavigator,
		createAppContainer,
		createDrawerNavigator
} from 'react-navigation';
import firebase from 'firebase';
import reducers from './reducers/index';
import { About, Attractions, Cart, HelpAndContact, Map, MyBookings, 
	MyWishList, Recommendations, Search, Tours, Login, Video } from './screens/index';
import SignUp from './screens/SignUp';
import DrawerMenu from './components/DrawerMenu';

StatusBar.setHidden(true);

const TourStackNavigator = createStackNavigator({
	Tours: {
		screen: Tours,
		navigationOptions: () => ({
			drawerLabel: 'HaNoi'
		})
	}
},
{
	headerMode: 'none'
});

const AttractionStackNavigator = createStackNavigator({
	Attractions: {
		screen: Attractions,
		navigationOptions: () => ({
			drawerLabel: 'HaNoi'
		})
	}
},
{
	headerMode: 'none'
});

const MapStackNavigator = createStackNavigator({
	Map: {
		screen: Map,
		navigationOptions: () => ({
			drawerLabel: 'HaNoi'
		})
	}
},
{
	headerMode: 'none'
});

const RecommendStackNavigator = createStackNavigator({
	Recommendations: {
		screen: Recommendations,
		navigationOptions: () => ({
			drawerLabel: 'HaNoi'
		})
	}
},
{
	headerMode: 'none'
});

const SearchStackNavigator = createStackNavigator({
	Search: {
		screen: Search,
		navigationOptions: () => ({
			drawerLabel: 'HaNoi'
		})
	}
},
{
	headerMode: 'none'
});

const VideoStackNavigator = createStackNavigator({
	Video: {
		screen: Video,
		navigationOptions: () => ({
			drawerLabel: 'HaNoi'
		})
	}
},
{
	headerMode: 'none'
});

const TabNavigator = createMaterialTopTabNavigator(
	{
        Tours: { screen: TourStackNavigator },
		Search: { screen: SearchStackNavigator },
		Recommendations: { screen: RecommendStackNavigator }, 
		Video: { screen: VideoStackNavigator },
		Map: { screen: MapStackNavigator },
		Attractions: { screen: AttractionStackNavigator }
	},
    {
        initialRouteName: 'Tours',
		tabBarOptions: {
			indicatorStyle: {
				height: 0,
				//backgroundColor: '#054D66'
			},
			labelStyle: {
				fontSize: 11,
				color: '#ffffff',
			},
			tabBarVisible: true,
			scrollEnabled: true,
			tabStyle: {
				backgroundColor: '#167c96',
				height: 40,
                width: 'auto',
			}
		}
	}
);

const stackNavigator = createStackNavigator({
	TabNavigator: {
		screen: TabNavigator,
		navigationOptions: ({ navigation }) => ({
			headerStyle: {
				backgroundColor: '#054D66'
			},
			headerTintColor: '#ffffff',
			headerLeft: <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
							<Text>
								<Icon type="ionicon" color="#fff" size={25} name="md-menu" />
							</Text>
						</TouchableOpacity>,  
			headerRight: <TouchableOpacity onPress={() => navigation.navigate('Change')}>
							<Text
								style={{
									fontFamily: 'Nunito',
									fontWeight: '100',
									color: '#fff'
								}}
							>Change</Text>
						</TouchableOpacity>,
			headerLeftContainerStyle: {
				paddingLeft: 20
			},
			headerRightContainerStyle: {
				paddingRight: 20
			},
			headerTitle: 'HaNoi',
			headerTitleStyle: {
				fontSize: 20,
				fontWeight: '100',
				fontFamily: 'Nunito',
				color: '#fff',
				position: 'relative',
				left: 70
			}
		})
	}
});

// const com = () => null;

const Menu = createDrawerNavigator(
	{
		stackNavigator, SignUp, Login, Cart, MyWishList, MyBookings, About, HelpAndContact
	},
	{
		headerMode: 'float',
		initialRouteName: 'stackNavigator',
		drawerBackgroundColor: '#007D9E',
		contentComponent: DrawerMenu
	}
);


const Navigation = createAppContainer(Menu);

class App extends Component {
	componentDidMount() {	
		const firebaseConfig = {
			apiKey: 'AIzaSyCXjMHIs1C2ClFNCMtafhRHlUAMP1EpeFw',
			authDomain: 'viator-f481f.firebaseapp.com',
			databaseURL: 'https://viator-f481f.firebaseio.com',
			projectId: 'viator-f481f',
			storageBucket: 'viator-f481f.appspot.com',
			messagingSenderId: '674464686946',
			appId: '1:674464686946:web:ac2a5f946690ce17'
		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Navigation />
		);
	}
}

export default App;
