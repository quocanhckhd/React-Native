import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import  Ionicons from 'react-native-vector-icons/Ionicons';

const Trailing = ({ label }) => {

    switch(label.toLowerCase()) {
        case "lựa chọn đại lý":
            return <AntDesign name="caretdown" size={10} color="white" />; 
        case "tên đăng nhập":
            return null;
        case "bảng điều khiển":
            return <MaterialCommunityIcons name="filter" color="#617fac" size={15} />;
        case "khách hàng": 
            return null;
        default: 
            return <AntDesign name="lock" size={20} color="white" />;

    }
}

const Leading = ({ label }) => {
    switch (label) {
        case "Khách hàng":
            return <Ionicons name="ios-search" color="#617fac" size={16} />;
        default:
            return null;
    }
}

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, renderIcon }) => {

    const { inputStyle, inputContainerStyle } = inputStyles;
    return (
            <View style={inputContainerStyle}>
                <Leading label={label} />
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
    );
};

const inputStyles = {
    inputStyle: {
        backgroundColor: '#2A4060',
        height: 30,
        color: '#fff',
        paddingLeft: 3,
        borderRadius: 3,
        width: '90%',
        fontSize: 13,
        paddingVertical: 3
    },
    inputContainerStyle: {
        backgroundColor: '#2A4060',
        flexDirection: 'row',
        height: 30,
        width: 200,
        paddingVertical: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    }
};


const RightBar = ({ title, placeholder, onChangeText }) => {
    if(title.toLowerCase() === "bảng điều khiển")  {
        return (
            <Input 
                placeholder={placeholder}
                secureTextEntry
                onChangeText={onChangeText}  
                label={title}
            />
        )
    } else {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Input 
                    placeholder={placeholder}
                    secureTextEntry
                    onChangeText={onChangeText}  
                    label={title}
                />
                <View style={{ justifyContent: 'center' }}>
                    <TouchableOpacity style={{ 
                        backgroundColor: '#5d7dac', 
                        borderRadius: 3,
                        elevation: 1,
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        paddingVertical: 5,
                        marginLeft: 10,
                        marginRight: 5,
                        paddingHorizontal: 10
                    }}><Text style={{ fontWeight: 13, fontWeight: '300', color: '#7998c6'}}>+ Tạo mới</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
 
const NavBar = ({ title, placeholder }) => {

    const { containerStyle, titleStyle, rightBarStyle } = styles;

    return (
        <View style={containerStyle}>
            <View style={{ width: '60%', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 15 }}>
                <Text style={titleStyle}>{title}</Text>
            </View>
            <View style={rightBarStyle}>
                <RightBar title={title} placeholder={placeholder} />
            </View>
        </View>
    );
}

const styles = {
    containerStyle: {
        backgroundColor: '#0f1a2b',
        flexDirection: 'row',
        width: '100%',
        height: 60,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 15,
        position: 'absolute',
        left: 15,
        top: 15
    },
    rightBarStyle: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '40%',
        paddingRight: 10,
    }
};

export { NavBar };