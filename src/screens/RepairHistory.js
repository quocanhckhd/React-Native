import React, { Component } from 'react'
import { View, Text } from 'react-native';
import { TaskBar } from '../components';
import { NavBar } from '../components/customerCROD';
import Octicons from 'react-native-vector-icons/Octicons';

class RepairHistory extends Component {
    render() {
        const { containerStyle, rightBar } = styles;
        return (
            <View style={containerStyle}>
                <TaskBar title="Lịch sử sửa chữa" />
                <View style={rightBar}>
                    <NavBar title="Lịch sử sửa chữa" />
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        backgroundColor: '#112033'
    },
    rightBar: {
        backgroundColor: '#112033',
        width: '90%'
    }
};

export default RepairHistory;