import React, { Component } from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import { NavBar, Input } from '../components/customerCROD';
import { TaskBar } from '../components';

class AddNewCustomer extends Component {

    render() {

        const { containerStyle, rightBar } = styles;

        return (
            <SafeAreaView style={containerStyle}>
                <TaskBar title="Tạo mới khách hàng" />
                <View style={rightBar}>
                    <NavBar title="Tạo mới khách hàng" />
                    <View style={{
                        paddingTop: 10, 
                        paddingBottom: 10,
                        paddingHorizontal: 20, 
                        alignItems: 'flex-start', 
                        marginTop: 30, 
                        justifyContent: 'center',
                        backgroundColor: '#1a2b45' 
                    }}>
                        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 20 }}>
                            Thông tin khách hàng
                        </Text>
                        
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Input title="Họ và tên chủ xe:" size="2" highlight="1"  />
                            <Input title="Email:" size="1" highlight="0"  />
                            <Input title="Điện thoại:" size="1" highlight="1"  />
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Input title="Tỉnh/TP:" size="1" highlight="1"  />
                            <Input title="Quận/Huyện:" size="1" highlight="1"  />
                            <Input title="Địa chỉ:" size="2" highlight="1"  />
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Input title="Tên công ty:" size="2" highlight="0"  />
                            <Input title="Mã số thuế:" size="1" highlight="0"  />
                            <Input title="Loại doanh nghiệp:" size="1" highlight="0"  />
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Input title="Fax:" size="1" highlight="0"  />
                            <Input title="Ghi chú:" size="2" highlight="0"  />
                        </View>
                       
                    </View>
                    <View style={{ 
                        paddingTop: 10,
                        paddingBottom: 20, 
                        paddingHorizontal: 20, 
                        alignItems: 'flex-start', 
                        marginTop: 30, 
                        justifyContent: 'center',
                        backgroundColor: '#1a2b45' 
                    }}>
                        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 20 }}>
                            Thông tin xe
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Input title="Biển số xe:" size="2" highlight="1"  />
                            <Input title="Số VIN:" size="1" highlight="1"  />
                            <Input title="Điện thoại:" size="1" highlight="1"  />
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Input title="Dòng xe:" size="1" highlight="1"  />
                            <Input title="Kiểu xe:" size="1" highlight="1"  />
                            <Input title="Mã kiểu xe:" size="1" highlight="1"  />
                            <Input title="Loại xe:" size="1" highlight="1"  />
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Input title="Loại máy:" size="1" highlight="0"  />
                            <Input title="Số máy:" size="1" highlight="0"  />
                            <Input title="Số khung:" size="1" highlight="0"  />
                            <Input title="Màu xe:" size="1" highlight="1"  />
                        </View>
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
        backgroundColor: '#112033',
        width: '90%',
    }  
}

export default AddNewCustomer;