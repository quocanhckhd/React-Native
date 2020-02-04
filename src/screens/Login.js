import React, { Component } from 'react'
import { View, Text, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from '../components/index';

class Login extends Component {

    state = { agency: '', userName: '', password: '' };

    onChangeText = e => {
        var target = e.target;
        var name = target.name;
        var value = target.value === 'checkbox' ? target.checked : target.value;
        this.setState({ [name] : value });
    }
   
    render() {
        const { bgStyle, tmv, vn, title, formStyle } = styles;
        return (
            <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground style={bgStyle} source={require('../assets/images/data/bgLogin.png')}>
                    <View style={title}>
                        <Text style={tmv}>TOYOTA</Text><Text style={vn}>VietNam</Text>
                    </View>
                    <View style={formStyle}>
                        <Input 
                            name="agency"
                            label="Lựa chọn đại lý"
                            secureTextEntry
                            placeholder="043080 Công ty liên doanh Toyota Thái Nguyên"
                            onChangeText={this.onChangeText}
                            value={this.state.agency}
                        />
                        <Input 
                            name="userName"
                            label="Tên đăng nhập"
                            secureTextEntry
                            onChangeText={this.onChangeText}
                            value={this.state.userName}
                        />
                        <Input
                            name="password" 
                            label="Mật khẩu"
                            secureTextEntry={false}
                            onChangeText={this.onChangeText}
                            value={this.state.password}
                        />
                        <Button title="Đăng nhập" />
                    </View>
                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}

const styles = {
    bgStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tmv: {
        fontSize: 64,
        color: '#AC014A',
    },
    vn: {
        fontSize: 64, 
        color: '#fff',
    },
    title: {
        flexDirection: 'row',
    },
    formStyle: {
        borderTopColor: '#122034',
        borderTopWidth: 3,
        borderRadius: 3,
        backgroundColor: '#192B44',
        paddingHorizontal: 20,
        paddingBottom: 20,
        width: 350,
        justifyContent: 'center',
        height: 350
    }
};

export default Login;