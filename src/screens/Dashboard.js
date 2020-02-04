import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import { NavBar, ToolBar, Cards, TaskBar } from '../components';


class Dashboard extends Component {
    render() {
        const { containerStyle, leftSide, rightSide, main } = styles;
        return (
            <View style={containerStyle}>
                <TaskBar title="Bảng điều khiển" />
                <View style={rightSide}>
                    <NavBar title="Bảng điều khiển" placeholder="Nhập biển số xe để lọc" />
                    <ToolBar userName="Nguyễn Thị Thơm" licenseNum="12G-095-56" brand="corrola - ae01" />
                    <Cards />
                    <View style={{ 
                        width: '100%', 
                        flexDirection: 'row'
                    }}>
                        <View style={{ 
                            width: '33%',
                            paddingLeft: 10
                        }}>
                            <MainHeader title="Khách chưa sắp xếp " customerNum="3" />
                            <View style={{ flexDirection: 'column' }}>
                                <MainCard licNum="31T-234.32" timeWaiting="04" color="#264267" timeStart="00:00" opacity="4,6" />
                                <MainCard licNum="68H-686.86" timeWaiting="04" color="#264267" timeStart="00:00" opacity="3,4" />
                                <MainCard licNum="89C-231.23" timeWaiting="00" color="#264267" timeStart="00:00" opacity="4,5" />
                                <MainCard licNum="31T-234.32" timeWaiting="15" color="#691b1b" timeStart="00:00" opacity="3,4,5,6" />
                            </View>
                        </View>
                        <View style={{ 
                            width: '33%',
                            paddingLeft: 10
                        }}>
                            <MainHeader title="Khách chờ tiếp" customerNum="4" />
                            <View style={{ flexDirection: 'column' }}>
                                <MainCard licNum="65A-1212" timeWaiting="18" color="#691b1b" timeStart="00:00" opacity="5,7" />
                                <MainCard licNum="90H-223.11" timeWaiting="04" color="#264267" timeStart="00:00" opacity="3,6,7" />
                                <MainCard licNum="22B-5104" timeWaiting="00" color="#10284a" timeStart="14:00" opacity="2,4" />
                                
                            </View>
                        </View>
                        <View style={{ 
                            width: '33%',
                            paddingLeft: 10
                        }}>
                            <MainHeader title="Khách đã tiếp" customerNum="5" />
                            <View style={{ flexDirection: 'column' }}>
                                <MainCard licNum="31T-234.32" timeWaiting="00" color="#264267" timeStart="00:00" opacity="3,4" />
                                
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const RenderItem = ({ title }) => {
    if(title.toLowerCase() === "khách đã tiếp") {
        return (
            <View style={{ width: '50%', flexDirection: 'row', paddingTop: 10, marginRight: 10 }}></View>
        );
    }
    return (
        <View style={{ 
            width: '50%', 
            flexDirection: 'row', 
            paddingTop: 10, 
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'flex-end'
        }}>
            <Image source={require('../assets/images/data/maintenance.png')} style={{ width: 25, height: 25, opacity: 0.1 }} />
            <Image source={require('../assets/images/data/generalRepair.png')} style={{ width: 25, height: 25, opacity: 0.1 }} />
            <Image source={require('../assets/images/data/paint.png')} style={{ width: 25, height: 25, opacity: 0.1 }} />
            <Image source={require('../assets/images/data/iconKm.png')} style={{ width: 25, height: 25, opacity: 0.1 }} />
        </View>
    );
}

const MainHeader = ({ title, customerNum }) => {
    return (
        <View style={{ width: '100%', flexDirection: 'row', height: 40, marginBottom: 20 }}>        
            <View style={{ width: '50%', flexDirection: 'column' }}>
                <Text style={{ color: '#ffffff', fontSize: 14, fontWeight: '500' }}>
                    {title}
                </Text>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={{ color: '#131d3b' , fontSize: 12, marginRight: 3 }}>
                        Tổng số:   
                    </Text>
                    <Text style={{ fontSize: 12, color: '#ffffff', marginRight: 3 }}>
                        {customerNum}
                    </Text>
                    <Text style={{ fontSize: 12, color: '#ffffff' }}>
                        khách
                    </Text>
                </View>
            </View> 
            <RenderItem title={title} />
        </View>
    );
}

const MainCard = ({ licNum, timeWaiting, timeStart, opacity, color }) => {


    return (
        <View style={{ 
            borderRadius: 3,
            marginLeft: 7,
            marginRight: 7,
            backgroundColor: color,
            paddingHorizontal: 10,
            flexDirection: 'row',
            paddingVertical: 5,
            height: 50,
            marginBottom: 10
        }}>
            <View style={{ width: '35%', flexDirection: 'column', paddingHorizontal: 3 }}>
                <Text style={{
                   color: '#ffffff', fontSize: 14, fontWeight: '700' 
                }}>{licNum}</Text>
                <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                    <Image source={require('../assets/images/data/iconMaintainance.png')} style={opacity.toString().includes("1") ? { width: 15, height: 15, opacity: 1, marginRight: 2 } : { marginRight: 2, width: 15, height: 15, opacity: 0.1 }} />
                    <Image source={require('../assets/images/data/iconPause.png')} style={opacity.toString().includes("2") ? { width: 15, height: 15, opacity: 1 } : { width: 15, height: 15, opacity: 0.1 }} />
                    <Text style={timeStart.toString() == '00:00' ? { opacity: 0.1, fontSize: 12, paddingLeft: 5 } : { color: '#fff', fontSize: 12, paddingLeft: 5 }}>{timeStart}</Text>
                </View>
            </View>
           <View style={{ width: '35%', flexDirection: 'column', paddingHorizontal: 5, paddingTop: 2 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/images/data/maintenance.png')} style={opacity.toString().includes("3") ? { width: 15, height: 15, opacity: 1 } : { width: 15, height: 15, opacity: 0.1 }} />
                    <Image source={require('../assets/images/data/generalRepair.png')} style={opacity.toString().includes("4") ? { width: 15, height: 15, opacity: 1 } : { width: 15, height: 15, opacity: 0.1 }} />
                    <Image source={require('../assets/images/data/paint.png')} style={opacity.toString().includes("5") ? { width: 15, height: 15, opacity: 1 } : { width: 15, height: 15, opacity: 0.1 }} />
                    <Image source={require('../assets/images/data/iconKm.png')} style={opacity.toString().includes("6") ? { width: 15, height: 15, opacity: 1 } : { width: 15, height: 15, opacity: 0.1 }} />
                </View> 
                <View style={{ paddingTop: 5 }}>
                    <Text style={{ color: '#ffffff', fontSize: 12 }}>{timeWaiting}'</Text>
                </View>
           </View>
            <View style={{ width: '30%', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                <Image source={require('../assets/images/data/iconPause.png')} style={opacity.toString().includes("7") ? { width: 15, height: 15, opacity: 1 } : { width: 15, height: 15, opacity: 0.1 }} />
            </View>
        </View>
    );
}

const styles = {
    containerStyle: {
        flexDirection: 'row',
        width: '100%',
        height: '100%'
    },
    rightSide: {
        backgroundColor: '#173251',
        width: '90%',
    },
    main: {

    }
};

export default Dashboard;