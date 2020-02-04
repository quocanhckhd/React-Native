import React, { Component } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { TaskBar, NavBar } from '../components';
import { customers } from '../components/customerList.json';

class CustomerList extends Component {

    renderSeparator = () => {
        return (
            <View 
                style={{
                    height: 0.5,
                    width: '96%',
                    backgroundColor: '#7d95b1',
                    marginLeft: '2%',
                    marginRight: '2%'
                }}
            />
        );
    }

    render() {

        const { containerStyle, rightBar } = styles;

        return (
            <SafeAreaView style={containerStyle}>
                <TaskBar title="Khách hàng" />
                <View style={rightBar}>
                    <NavBar title="Khách hàng" placeholder="Tìm kiếm theo biển số hoặc số VIN" />
                    <ToolBarCustomerList />
                    <FlatList 
                        data={customers}
                        renderItem={({ item, index, separators }) => (
                            <View style={{
                                paddingVertical: 10,
                                width: '100%', backgroundColor: '#1a2b45', flexDirection: 'row'
                            }}>
                                <View style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'flex-start', width: '70%', paddingLeft: 15 }}>
                                    <Text style={{ color: '#fff', fontSize: 16 }}>{item.name}</Text>
                                    <Text style={{ color: '#7d95b1', fontSize: 16 }}>{item.code}</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'flex-end', width: '15%', paddingRight: 15 }}>
                                    <Text style={{ color: '#7d95b1', fontSize: 16 }}>{item.vin}</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'flex-end', width: '15%', paddingRight: 15 }}>
                                    <Text style={{ color: '#7d95b1', fontSize: 16 }}>{item.inform}</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const ToolBarCustomerList = () => {
    return (
        <View style={{ width: '100%', backgroundColor: '#1a2b45', height: 40, flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '70%', paddingLeft: 15 }}>
                <Text style={{ color: '#7d95b1', fontSize: 14 }}>Khách hàng</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'flex-end', 
            width: '15%', paddingRight: 15 }}>
                <Text style={{ color: '#7d95b1', fontSize: 14 }}>Số VIN</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'flex-end', width: '15%', paddingRight: 15 }}>
                <Text style={{ color: '#7d95b1', fontSize: 14 }}>Thông tin xe</Text>
            </View>
        </View>
    );
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
};

export default CustomerList;