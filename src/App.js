import React, { Component } from 'react'
//import Login from './screens/Login';
import 'react-native-gesture-handler';
//import Dashboard from './screens/Dashboard';
//import CustomerList from './screens/CustomerList';
import AddNewCustomer from './screens/AddNewCustomer';
import EditCustomer from './screens/EditCustomer';

class App extends Component {
    render() {
        return (
            <EditCustomer />
        )
    }
}

export default App;