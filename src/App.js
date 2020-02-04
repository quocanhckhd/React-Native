import React, { Component } from 'react'
import Login from './screens/Login';
import 'react-native-gesture-handler';
import Dashboard from './screens/Dashboard';
import CustomerList from './screens/CustomerList';
import AddNewCustomer from './screens/AddNewCustomer';

class App extends Component {
    render() {
        return (
            <CustomerList />
        )
    }
}

export default App;