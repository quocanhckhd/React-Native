import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavBar, Input } from '../components/customerCROD';
import { TaskBar } from '../components';

class EditCustomer extends Component {

    state = { roId: '#20200114-000006'}

    render() {
        return (
            <View style={styles.containerStyle}>
                <TaskBar title="Sửa thông tin" />
                <View style={styles.rightBar}>
                    <NavBar title="Sửa thông tin" />
                    <View style={{
                        paddingTop: 10, 
                        paddingBottom: 10,
                        paddingHorizontal: 20, 
                        alignItems: 'flex-start', 
                        marginTop: 30, 
                        justifyContent: 'center',
                        backgroundColor: '#1a2b45' 
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 20 }}>
                                Thông tin khách hàng
                            </Text>
                            <Text style={{ marginLeft: 10, fontWeight: 'bold', color: '#7c91ae', fontSize: 20 }}>
                                {this.state.roId}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Input title="Họ và tên chủ xe:" size="2" 
                                highlight="1" placeholder="Vũ Quốc Anh"  />
                            <Input title="Email:" size="1" highlight="0"  />
                            <Input title="Điện thoại:" size="1" 
                                highlight="1" placeholder="01654438226" />
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Input title="Tỉnh/Thành phố:" size="1" 
                                highlight="1" placeholder="Hải Dương" />
                            <Input title="Quận huyện:" size="1" 
                                highlight="1" placeholder="Thành phố Hải Dương" />
                            <Input title="Địa chỉ:" size="2" 
                                highlight="1" placeholder="Hải Dương" />
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Input title="Tên công ty:" size="2" highlight="0"  />
                            <Input title="Mã số thuế:" size="1" highlight="0"  />
                            <Input title="Loại doanh nghiệp:" size="1" highlight="0"  />
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Input title="Fax:" size="1" highlight="0"  />
                            <Input title="Ghi chú:" size="3" highlight="0"  />
                        </View>
                    </View>
                    <View style={{ 
                        paddingTop: 10,
                        paddingBottom: 20, 
                        paddingHorizontal: 20, 
                        alignItems: 'flex-start', 
                        marginTop: 30, 
                        justifyContent: 'center',
                        backgroundColor: '#1a2b45' 
                    }}>
                        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 20 }}>
                            Thông tin xe
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Input title="Biển số xe:" size="2" 
                                highlight="1" placeholder="30E131923" />
                            <Input title="Số VIN:" size="1" 
                                highlight="1" placeholder="123123123123" />
                            <Input title="Dòng xe:" size="1" highlight="1" />
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Input title="Dòng xe:" size="1" highlight="1" placeholder="TOYOTA" />
                            <Input title="Kiểu xe:" size="1" highlight="1" placeholder="COROLLA" />
                            <Input title="Mã kiểu xe:" size="1" highlight="1" placeholder="AE101" />
                            <Input title="Loại xe:" size="1" highlight="1" placeholder="4 chỗ"  />
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Input title="Loại máy:" size="1" highlight="0"  />
                            <Input title="Số máy:" size="1" highlight="0"  />
                            <Input title="Số khung:" size="1" highlight="0" placeholder="5234234"  />
                            <Input title="Màu xe:" size="1" highlight="1" placeholder="red" />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
});

export default EditCustomer;
