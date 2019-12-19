import React, { Component } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createMaterialTopTabNavigator,
		createDrawerNavigator,
		createAppContainer
} from 'react-navigation';
// import Authentication from './Authentication/Authentication';
import reducers from './reducers/index';
import Shop from './Main/Shop/shop';
import CategoryPage from './Main/Shop/Category/CategoryPage';
import ProductPage from './Main/Shop/Product/ProductPage';
import ForgotPassword from './Authentication/ForgotPassword';
import ProductCategory from './Main/Shop/Product/ProductCategory';
import ProductDetail from './Main/Shop/Product/ProductDetail';
import Menu from './Main/Menu';
import SignIn from './Authentication/signIn';
import SignUp from './Authentication/signUp';


const { width } = Dimensions.get('window');

StatusBar.setHidden(true);

export const TabNavigator = createMaterialTopTabNavigator({
	SignIn,
	SignUp
},
	{
		tabBarOptions: {
			style: {
				backgroundColor: '#ffffff'
			},
			labelStyle: {
				color: '#000'
			},
			upperCaseLabel: false,
			activeTintColor: '#ddd',
			inactiveTintColor: '#000'
		}
	}
);

const MyDrawerNavigator = createDrawerNavigator(
	{
		Shop,
		TabNavigator: { screen: TabNavigator },
		CategoryPage,
		ProductPage,
		ForgotPassword,
		ProductCategory,
		ProductDetail,
		
	},
	{
		contentComponent: Menu,
		drawerWidth: width * 0.83
	}
);

const Navigation = createAppContainer(MyDrawerNavigator);

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			display: false
		};
	}

	componentDidMount() {
		const config = {
			apiKey: 'AIzaSyCcOCsh1aPliEtzQnuqhuhg9pjuqaGmoKc',
			authDomain: 'manager-8900a.firebaseapp.com',
			databaseURL: 'https://manager-8900a.firebaseio.com',
			projectId: 'manager-8900a',
			storageBucket: 'manager-8900a.appspot.com',
			messagingSenderId: '89246775870'
		};
		firebase.initializeApp(config);
	}


	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Navigation />
			</Provider>
		);
	}
}


export default App;
