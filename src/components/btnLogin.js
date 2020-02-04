import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
 
const Button = ({ title, onPress }) => {
    const { titleStyle, buttonStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={titleStyle}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    titleStyle: {
        color: '#ffffff',
        fontSize: 16,
        paddingTop: 10,
		paddingBottom: 10
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#579BFE',
        paddingHorizontal: 30,
        height: 44,
        marginTop: 30,
        borderRadius: 3,
    }
};

export { Button };