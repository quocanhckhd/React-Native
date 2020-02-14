import React from 'react'
import { View, Text, TextInput, Image } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

const Trailing = ({ title }) => {
    switch(title.toLowerCase()) {
        case "email:":
            return <Image source={require('../../assets/images/data/iconEmail.png')} />;
        case "điện thoại:":
            return <Image source={require('../../assets/images/data/iconPhone.png')} />;
        case "mã số thuế:":
            return <Image source={require('../../assets/images/data/iconPhone.png')} />;
        case "loại doanh nghiệp:": case "dòng xe:": case"mã kiểu xe:": case "loại xe:": case "loại máy:": case "màu xe:":
            return <Octicons color="#fff" size={20} name="triangle-down" />;
        default: 
            return null;
    }
}

const Input = ({ title, size, highlight, placeholder }) => {

    const { titleStyle } = styles;

    return (
        <View style={{
            flexDirection: 'column',
            width: size.toString() == '2' ? '50%' : (size.toString() === '1' ? '25%' : '75%'),
            paddingHorizontal: 10
        }}>
            <Text style={titleStyle}>{title}</Text>
            <View style={{ 
                backgroundColor: '#2A4060',
                flexDirection: 'row',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                borderTopWidth: highlight.toString() === "1" ? 2  : 0,
                borderWidth: highlight.toString() === "1" ? 2  : 0,
                borderColor: '#fff',
                paddingRight: 10,
                paddingTop: 0
                
            }}>
                <View style={{ width: '90%', alignItems: 'flex-start' }}>
                    <TextInput 
                        autoCorrect={false}
                        placeholder={placeholder}
                        style={{
                            backgroundColor: '#2c4061',
                            height: 37,
                            color: '#fff',
                            paddingLeft: 15,
                            alignItems: 'flex-start',
                            borderRadius: 3,
                            color: "#fff",
                            fontWeight: 'bold', fontSize: 14
                        }}
                        placeholderTextColor="#fff"
                        placeholderStyle={{ fontWeight: 'bold', fontSize: 14 }}
                    />
                </View>
                <View style={{ width: '10%', alignItems: 'flex-end' }}>
                    <Trailing title={title} />
                </View>
            </View>
        </View>
    );
};

const styles = {
    titleStyle : {
        marginTop: 5,
        marginBottom: 10,
        color: '#7d95b1',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 10,
    }
};

export { Input };