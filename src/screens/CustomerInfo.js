import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavBar } from '../components/customerCROD';
import { TaskBar } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

class EditCustomer extends Component {

    render() {
        const { containerStyle, rightBar } = styles;
        return (
            <View style={containerStyle}>
                <TaskBar title="Sửa thông tin khách hàng" />
                <View style={rightBar}>
                    <NavBar title={ this.props.userName ? this.props.userName : 'Vũ Quốc Anh'} />
                    <View style={{ 
                        marginTop: 0, paddingHorizontal: 15, paddingHorizontal: 10, flexDirection: 'row', width: '100%', 
                        paddingBottom: 20, backgroundColor: '#1a2b45' }}>
                        <View style={{ alignItems: 'flex-start', width: '50%', paddingTop: 15 }}>
                            <UserInfo userName="Vũ Quốc Anh" phone="0394050143" addr="Tứ Minh, Hải Dương, Hải Dương" />
                        </View>
                        <View style={{ alignItems: 'flex-end', width: '50%', paddingTop: 15, paddingLeft: 150, paddingRight: 10 }}>
                            <CarInfo licNum="30E-16925" vin="31231231" color="black" brand="toytota-vios-ncp150" />
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row', width: '100%', borderBottomWidth: 1, paddingHorizontal: 20,
                        borderColor: '#7d95b1', paddingVertical: 20
                    }}>
                        <View style={{
                            width: '60%', alignItems: 'flex-start', flexDirection: 'column',
                            justifyContent: 'center', 
                        }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../assets/images/data/iconCalendar2.png')} />
                                <Text style={{ marginLeft: 10, color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Lịch hẹn gần nhất</Text>
                            </View>
                            <Text style={carInfoStyle.labelStyle}>CVDV</Text>
                            <Text style={carInfoStyle.labelStyle}>Loại CV</Text>
                            <Text style={carInfoStyle.labelStyle}>Nội dung</Text>
                        </View>
                        <View style={{ 
                            backgroundColor: '#1a2b45', paddingLeft: 10, 
                            paddingTop: 10, alignSelf: 'flex-end', flexDirection: 'column', width: '40%'
                        }}>
                            <View style={{ alignItems: 'flex-start'}}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>Danh sách phụ tùng hẹn từng bước</Text>
                            </View>
                            <View style={{ paddingTop: 25, paddingBottom: 25,
                                                justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{ fontSize: 20, fontWeight: '300', color: '#475e7d' }}>
                                    KHÔNG CÓ PHỤ TÙNG HẸN TRƯỚC
                                </Text>
                            </View>
                        </View>
                    </View>
                    <RoList roNumber="3412412542534" />
                    <CollapseBar title="Lịch sử sửa chữa" />
                    <CollapseBar title="Yêu cầu sửa chữa" />
                    <CollapseBar title="Hoạt động CR" />
                    <Footer />
                </View>
            </View>
        );
    }
}

const CarInfo = ({ licNum, vin, color, brand }) => {
    const { containerStyle, labelStyle } = carInfoStyle;
    return (
        <View style={containerStyle}>
            <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>{brand.toUpperCase()}</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '30%' }}>
                        <Text style={labelStyle}>Biển số</Text>
                    </View>
                    <Text style={{ fontSize: 16, color: '#948b58' }}>{licNum.toUpperCase()}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '30%' }}>
                        <Text style={labelStyle}>Số VIN</Text>
                    </View>
                    <Text style={{ fontSize: 16, color: '#fff' }}>{vin}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: '30%' }}>
                        <Text style={labelStyle}>Màu xe</Text>
                    </View>
                    <Text style={{ fontSize: 16, color: '#fff' }}>{color}</Text>
                </View>
            </View>
        </View>
    );
}

const carInfoStyle = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#142336',
        width: '100%',
        paddingLeft: 10,
        paddingVertical: 10,
        flexDirection: 'column'
    },
    labelStyle: {
        fontSize: 16,
        color: '#5e718f'
    }
});

const UserInfo = ({ userName, phone, addr }) => {

    const { containerStyle } = userInformStyle;
    const { labelStyle } = carInfoStyle;

    return (
        <View style={containerStyle}>
            <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center', paddingTop: 10 }}>
                <Image source={require('../assets/images/data/iconUser.png')} style={{ marginRight: 10 }} />
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff' }}>Thông tin khách hàng</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '35%' }}>
                    <Text style={labelStyle}>Tên khách hàng</Text>
                </View>
                <Text style={{ fontSize: 16, color: '#fff' }}>{userName}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '35%' }}>
                    <Text style={labelStyle}>Số điện thoại</Text>
                </View>
                <Text style={{ fontSize: 16, color: '#fff' }}>{phone}</Text>

            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '35%' }}>
                    <Text style={labelStyle}>Địa chỉ</Text>
                </View>
                <Text style={{ fontSize: 16, color: '#fff' }}>{addr}</Text>
            </View>
            <View style={{ paddingTop: 10, paddingBottom: 5, alignItems: 'flex-start' }}>
                <TouchableOpacity style={{ borderRadius: 10, paddingVertical: 3, 
                    paddingHorizontal: 8, flexDirection: 'row', justifyContent: 'center',
                    borderColor: '#fff', borderWidth: 1, alignItems: 'center', paddingVertical: 3 }}>
                        <Text style={{ fontSize: 12, color: '#fff', marginRight: 5 }}>Xem tất cả</Text>
                        <Octicons name="triangle-down" size={14} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const userInformStyle = StyleSheet.create({
    containerStyle: {
        flexDirection: 'column',
        paddingLeft: 10
    }
});

const styles = {
    containerStyle: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        backgroundColor: '#112033'
    },  
    rightBar: {
        backgroundColor: '#112033',
        width: '90%'
    }
};

const RoList = ({ roNumber }) => {
    return (
        <View style={{ flexDirection: 'column', width: '100%', borderBottomWidth: 1, 
            paddingHorizontal: 20, borderColor: '#7d95b1', paddingVertical: 20}}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>Danh sách báo giá</Text>
            <View style={{ backgroundColor: '#1a2b45', width: '100%', paddingVertical: 10, 
                        paddingHorizontal: 20, flexDirection: 'column', marginTop: 15 }}>
                <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>
                    RO#: {roNumber} - Đóng RO
                </Text>
                <Text style={{ fontSize: 16, fontWeight: '500', color: '#475e7d', marginTop: 15 }}>
                    Yêu cầu khách hàng:
                </Text>
            </View>
        </View>
    );
}

const CollapseBar = ({ title }) => {
    return (
        <View style={{ paddingVertical: 10, paddingHorizontal: 20, borderBottomWidth: 1,
            borderColor: '#fff', flexDirection: 'row'}}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                <Octicons name="triangle-down" color="#475e7d" size={20} />
            </View>
        </View>
    );
}

const Footer = () => {
    return (
        <View style={{
            width: '100%', position: 'absolute', bottom: 0, paddingVertical: 15, backgroundColor: '#1a2b45',
            justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', paddingRight: 20
        }}>
            <TouchableOpacity
                style={{ backgroundColor: '#4d6a91', justifyContent: 'center', alignItems: 'center',
                    paddingVertical: 10, paddingHorizontal: 20, marginLeft: 20, borderRadius: 5 }}
            ><Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Lịch sử sửa chữa</Text></TouchableOpacity>
            <TouchableOpacity
                style={{ backgroundColor: '#4d6a91', justifyContent: 'center', alignItems: 'center',
                    paddingVertical: 10, paddingHorizontal: 20, marginLeft: 20, borderRadius: 5 }}
            ><Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Phiếu khám xe</Text></TouchableOpacity>
            <TouchableOpacity
                style={{ backgroundColor: '#4d6a91',
                    paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', marginLeft: 20,
                    borderRadius: 5 }}
            >
                <AntDesign name="plus" color="#fff" size={20} />
                <Text style={{ marginLeft: 10, color: '#fff', fontSize: 16, fontWeight: '500' }}>Lịch sử sửa chữa</Text>
            </TouchableOpacity>
        </View>
    );
}

export default EditCustomer;