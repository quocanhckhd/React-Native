
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Platform, Animated, ScrollView, Dimensions } from 'react-native';


const HEADER_MIN_HEIGHT = 50;
const HEADER_MAX_HEIGHT = 200;
const { height, width } = Dimensions.get("window");

export default class App extends Component {

  constructor() {
    super();

    this.scrollYAnimatedValue = new Animated.Value(0);

    this.mT = new Animated.Value(0);

    this.array = [];
  }

  componentWillMount() {
    for (var i = 1; i <= 75; i++) {
      this.array.push(i);
    }
  }

  render() {

    const  headMov = this.scrollYAnimatedValue.interpolate({
      inputRange: [0, 180, 181],
      outputRange: [0, -180, -181],
      extrapolate: 'clamp'
    });

    const headerHeight = this.scrollYAnimatedValue.interpolate(
      {
        inputRange: [ 0, ( HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT ) ],
        outputRange: [ HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT ],
        extrapolate: 'clamp'
      });
    const headerBackground = this.scrollYAnimatedValue.interpolate(
      {
        inputRange: [ 0, ( HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT ) ],
        outputRange: [ "red", "blue" ],
        extrapolate: 'clamp'
      });

    return (
      <View style={styles.container}>
          
          
         <Animated.View style={{ height: 60, backgroundColor: 'red', position: 'relative', top: 180, transform: [{ translateY: headMov }] }}>
            <Text style={{ color: '#000' }}>Animated Header</Text>
          </Animated.View>
        <ScrollView
          contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } } }]
          )}>
          
          {
            this.array.map((item, key) =>
              (
                <View key={key} style={styles.item}>
                  <Text style={styles.itemText}>Row No : {item}</Text>
                </View>
              ))
          }
        </ScrollView>
        
       

      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center"

    },
    animatedHeaderContainer: {
      position: 'absolute',
      top: (Platform.OS == 'ios') ? 20 : 0,
      left: 0,
      right: 0,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    headerText: {
      color: 'white',
      fontSize: 22
    },
    item: {
      backgroundColor: '#ff9e80',
      margin: 8,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center'
    },
    itemText: {
      color: 'black',
      fontSize: 16
    }
    
  });