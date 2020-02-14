import React from 'react'
import { View, Text, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ocitcons from 'react-native-vector-icons/Octicons';

const NavBar = ({ title }) => {
    
    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <View style={{ width: '20%',  paddingLeft: 20, justifyContent: 'center' }}> 
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                    <Image source={require('../../assets/images/data/backIcon.png')} style={{ height: 20 }} />
                    <Text style={{ marginLeft: 8, fontWeight: '500', color: '#91a9c7', fontSize: 24 }}>Quay lại</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: '60%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 25 }}>{title}</Text>
            </View>
            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'flex-end', paddingRight: 20 }}>
                <RightBar title={title} />
            </View>
        </View>
    );
};

const RightBar = ({ title }) => {
    switch(title.toLowerCase()) {

        case "tạo mới khách hàng": case "sửa thông tin":
            return (
                <TouchableOpacity style={{ backgroundColor: 'transparent'}}>
                    <Text style={{ color: '#91a9c7', fontWeight: 'bold', fontSize: 24}}>Lưu</Text>
                </TouchableOpacity>
            );
        case "lịch sử sửa chữa": 
            return (
                <View style={{ marginRight: 10, width: '25%', alignItems: 'flex-end', 
                    justifyContent: 'center', backgroundColor: '#2c4061', paddingVertical: 5,
                    paddingLeft: 10, height: 40, flexDirection: 'row' }}>
                    <View style={{ width: '90%', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Tất cả</Text>
                    </View>
                    <View style={{ width: '10%', justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Ocitcons name="triangle-down" color="#fff" size={20} />
                    </View>
                </View>
            );
        default:
            return (
                <TouchableOpacity style={{ 
                    backgroundColor: '#5d7dac', 
                    borderRadius: 3,
                    elevation: 1,
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    paddingVertical: 10,
                    marginLeft: 10,
                    marginRight: 5,
                    paddingHorizontal: 20,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <AntDesign color="#fff" size={20} name="edit" />
                    <Text style={{ marginLeft: 7, fontSize: 16, fontWeight: '300', color: '#fff'}}>
                        Sửa
                    </Text>
                </TouchableOpacity>
            );
    }
}

const styles = {
    containerStyle: {
        backgroundColor: '#0f1a2b',
        flexDirection: 'row',
        width: '100%',
        height: 80,
    }
}

export { NavBar };