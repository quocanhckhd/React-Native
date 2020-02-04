import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Cards = () => {
    return (
        <View style={{ 
                width: '100%', 
                alignItems: 'center', 
                flexDirection: 'row',
                marginBottom: 15
        }}>
            <Card title="Phiếu khám" />
            <Card title="Tạo báo giá" />
            <Card title="Tạm dừng" />
            <Card title="Tiếp nhận xong" />
        </View>
    );
}

const Card = ({ title }) => {

    const { cardContainerStyle, titleStyle, iconStyle } = styles;

    return (
        <View style={cardContainerStyle}>
            <Text style={titleStyle}>{title.toUpperCase()}</Text>
            <Icon style={iconStyle} title={title} />
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        flex: 1, 
        textAlign: 'left',
        color: '#ffffff',
        fontSize: 14
    },
    iconStyle: {
        flex: 1, 
        textAlign: 'right'
    },    
    cardContainerStyle: {
        borderRadius: 3,
        marginLeft: 7,
        marginRight: 7,
        backgroundColor: '#264166',
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '23%',
        flexDirection: 'row'
    }
});

const Icon = ({ title }) => {
    switch(title.toLowerCase()) {
        case "phiếu khám": 
            return <Image source={require('../assets/images/data/iconCar.png')} style={{ width: 20, height: 20 }} />;
        case "tạo báo giá":
            return <Image source={require('../assets/images/data/icon$.png')} style={{ width: 20, height: 20 }} />;
        case "tạm dừng":
            return <Image source={require('../assets/images/data/iconPause.png')} style={{ width: 20, height: 20 }} />;
        default:
            return <Image source={require('../assets/images/data/iconChecked.png')} style={{ width: 20, height: 20 }} />;
    }
}

export { Cards };