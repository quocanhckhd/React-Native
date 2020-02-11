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

const Input = ({ title, size, highlight }) => {

    const { titleStyle } = styles;

    return (
        <View style={{
            flexDirection: 'column',
            width: size.toString() == '2' ? '50%' : '25%',
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
                paddingRight: 10
            }}>
                <TextInput 
                    autoCorrect={false}
                    style={{
                        backgroundColor: '#2c4061',
                        height: 35,
                        color: '#fff',
                        paddingLeft: 5,
                        paddingRight: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 3,
                        minWidth: '90%' 
                    }}
                />
                <Trailing title={title} />
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