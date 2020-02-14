import React, { Component } from 'react'
//import Login from './screens/Login';
import 'react-native-gesture-handler';
//import Dashboard from './screens/Dashboard';
//import CustomerList from './screens/CustomerList';
import AddNewCustomer from './screens/AddNewCustomer';
import EditCustomer from './screens/EditCustomer';
import CustomerInfo from './screens/CustomerInfo';
import RepairHistory from './screens/RepairHistory';

class App extends Component {
    render() {
        return (
            <RepairHistory />
        )
    }
}

export default App;