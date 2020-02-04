import React, { Component } from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import { NavBar } from '../components/customerCROD';
import { TaskBar } from '../components';

class AddNewCustomer extends Component {

    render() {

        const { containerStyle, rightBar } = styles;

        return (
            <SafeAreaView style={containerStyle}>
                <TaskBar title="Tạo mới khách hàng" />
                <View style={rightBar}>
                    <NavBar title="Tạo mới khách hàng" />
                    <View>
                        
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}



const styles = {
    containerStyle: {
        flexDirection: 'row',
        width: '100%',
        height: '100%'
    },
    rightBar: {
        backgroundColor: '#173251',
        width: '90%',
    }  
}

export default AddNewCustomer;