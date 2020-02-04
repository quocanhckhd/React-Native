import React from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UserCard = ({ userName, brand, licenseNum }) => {

    const { containerStyle, firstRow, secondRow, buttonTextStyle,
            brandText, licNumText, buttonStyle, usrNameTxt } = styleCards;

    return (
        <View style={containerStyle}>   
            <View style={firstRow}>
                <View style={{ width: '60%', paddingLeft: 10 }}>
                    <Text style={usrNameTxt}>{userName}</Text>
                </View>
                <View style={{ width: '40%', paddingRight: 60 , paddingLeft: 0}}>
                    <TouchableOpacity style={buttonStyle}>
                        <Text style={buttonTextStyle}>Chi tiết</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={secondRow}>
                <View style={{ width: '50%' }}>
                    <Text style={brandText}>{brand.toUpperCase()}</Text>
                </View>
                <View style={{ width: '50%', paddingLeft: 10 }}>
                    <Text style={licNumText}>{licenseNum.toUpperCase()}</Text>
                </View>
            </View>
        </View>
    );
}

const styleCards = {
    containerStyle: {
        flexDirection: 'column',
        paddingTop: 10,
        paddingBottom: 10,
        elevation: 2,
        height: 90
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    secondRow: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        paddingLeft: 15
    },
    brandText: {
        color: '#ffffff',
        fontSize: 18,
    },
    licNumText: {
        color: '#d8c75b',
        fontSize: 18,
    },
    buttonStyle: {
        paddingVertical: 3,
        paddingHorizontal: 7,
        borderWidth: 0.5,
        borderColor: '#fff',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101c2c'
    },
    buttonTextStyle: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '400'
    },
    usrNameTxt: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    }
};

const Icon = ({ title }) => {
    switch (title) {
        case "Bảo dưỡng":
            return <Image source={require('../assets/images/data/maintenance2x.png')} style={{ opacity: 0.1 }} />;
        case "Sửa chữa":
            return <Image source={require('../assets/images/data/generalRepair2x.png')} />;
        case "Đồng sơn":
            return <Image source={require('../assets/images/data/paint2x.png')} />;
        default: 
            return <Image source={require('../assets/images/data/iconKm2x.png')} style={{ opacity: 0.1 }} />;

    }
}

const Tool = ({ title }) => {

    const { titleStyle, containerStyle } = styleTools;
    return (
        <View style={containerStyle}>
            <View>
                <Icon title={title} />
            </View>
            <View style={{ paddingTop: 5 }}>
                <Text style={titleStyle}>{title}</Text>
            </View>
        </View>
    );
}

const styleTools = {
    titleStyle: {
        fontSize: 12,
        color: '#ffffff',
    },
    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        paddingHorizontal: 15,
        height: 90
    }
};

const ToolBar = ({ userName, brand, licenseNum }) => {
    return (
        <View style={{ width: '100%', flexDirection: 'row', height: 90 }}>
            <View style={{ width: '40%' }}>
                <UserCard 
                    userName={userName}
                    brand={brand}
                    licenseNum={licenseNum}
                /> 
            </View>
            <View style={{ width: '20%' }}>

            </View>
            <View style={{ width: '40%', flexDirection: 'row' }}>
                <Tool title="Bảo dưỡng" />
                <Tool title="Sửa chữa" />
                <Tool title="Đồng sơn" />
                <Tool title="1000km" />
            </View>
        </View>
    );
}   

export { ToolBar, Tool };