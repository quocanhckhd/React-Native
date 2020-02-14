import React from 'react'
import { View, Text, Image } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const Account = ({ title, image }) => {
    const { titleStyle, container } = styles;
    if(title.toLowerCase() === "đăng xuất") {
        return (
            <TouchableOpacity>
                <View style={container}>
                    <Image source={image} style={{ width: 25, height: 25 }} />
                    <Text style={titleStyle}>{title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <TouchableOpacity>
            <View style={container}>
                <Image source={image} />
                <Text style={titleStyle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const ThirdAccount = ({ title }) => {
    switch (title.toLowerCase()) {
        case "tạo mới khách hàng": case "sửa thông tin":
            return <Account title="Công việc" image={require('../assets/images/data/iconCalendarChip.png')} />; 
        default: 
            return null;
    }
}   

const TaskBar = ({ title }) => {
    return (
        <View style={{
            backgroundColor: '#061834',
            width: '10%',
            alignItems: 'center',
            justifyContent: 'flex-start'
        }}>
            <View style={{ width: '100%', height: '70%', paddingTop: 20, justifyContent: 'flex-start', alignContent: 'center' }}>
                <Account 
                    image={require(`../assets/images/data/iconUser.png`)} 
                    title="Dashboard"
                />
                <Account 
                    image={require(`../assets/images/data/customer.png`)} 
                    title="Khách hàng" 
                />
                <ThirdAccount title={title} />
            </View>
            <View style={{ width: '100%', height: '30%', paddingBottom: 20, justifyContent: 'flex-end', alignContent: 'center' }}>
                <Account 
                    image={require(`../assets/images/data/logout.png`)} 
                    title="Đăng xuất" 
                />
            </View>
        </View>
    );
}

const styles = {
    titleStyle: {
        paddingTop: 5,
        fontSize: 16,
        color: '#ffffff'
    },
    container: {
		elevation: 1,
        marginTop: 10,
		marginRight: 5,
        marginLeft: 5,
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
    },
};

export { TaskBar };