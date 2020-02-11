import React from 'react';
import { View, Text, TextInput } from 'react-native';
import  AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Trailing = ({ label }) => {

    switch(label) {
        case "Lựa chọn đại lý":
            return <AntDesign name="caretdown" size={10} color="white" />; 
        case "Tên đăng nhập":
            return null;
        case "Bảng điều khiển":
            return <MaterialCommunityIcons name="filter" color="#617fac" size={15} />;
        case "Khách hàng": 
            return <Ionicons name="ios-search" color="#617fac" size={15} />;
        default: 
            return <AntDesign name="lock" size={20} color="white" />;

    }
}

const Label = ({ title }) => {
    const { labelStyle } = styles;
    if(title === "Tên đăng nhập" || title === "Lựa chọn đại lý" || title === "Mật khẩu") {
        return <Text style={labelStyle}>{label}</Text>
    }
    return null
}

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, renderIcon }) => {

    const { inputStyle, containerStyle, inputContainerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Label title={label} />
            <View style={inputContainerStyle}>
                <TextInput 
                    secureTextEntry={secureTextEntry}
                    autoCorrect={false}
                    placeholder={placeholder}
                    style={inputStyle}
                    value={value}
                    onChangeText={onChangeText}
                    placeholderTextColor={label === "Bảng điều khiển" || label === "Khách hàng" ? "#617fac" : "#fff"}
                />
                <Trailing label={label} />
            </View>
        </View>
    );
};

const styles = {
    containerStyle: {
        flexDirection: 'column',
        flex: 1
    },
    labelStyle: {
        marginTop: 20,
        marginBottom: 10,
        color: '#4F6A92',
        fontSize: 14,
    },
    inputStyle: {
        backgroundColor: '#2A4060',
        height: 40,
        color: '#fff',
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        width: '90%'
    },
    inputContainerStyle: {
        backgroundColor: '#2A4060',
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
};

export { Input };
