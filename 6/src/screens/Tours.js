//Make a component
import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform
} from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const IMAGE_HEIGHT = 250;
const HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 60;
const SCROLL_HEIGHT = IMAGE_HEIGHT - HEADER_HEIGHT;
const THEME_COLOR = 'rgba(85,186,255, 1)';
const FADED_THEME_COLOR = 'rgba(85,186,255, 0.8)';

export default class Tour extends Component {

	renderScrollViewContent = () => {
		const data = Array.from({ length: 30 });
		return (
			<View style={styles.scrollViewContent}>
				{data.map((_, i) =>
					(
						<View key={i} style={styles.row}>
							<Text>{i}</Text>
						</View>
					)
				)}
			</View>
		);
	}

  render() {
    return (
		<Animated.ScrollView
			scrollEventThrottle={5}
			onScroll={Animated.event(
				[{ nativeEvent: { contentOffset: { y: this.nScroll } } }], 
				{ useNativeDriver: true })
			}
			style={{ zIndex: 0 }}
		>
			<Animated.View 
				style={{
					transform: [{ translateY: Animated.multiply(this.nScroll, 0.65) }, 
								{ scale: this.imgScale }],
					backgroundColor: THEME_COLOR
				}}
			>
			<Animated.Image
				source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Moraine_Lake_17092005.jpg' }}
				style={{ height: IMAGE_HEIGHT, width: '100%', opacity: this.imgOpacity }}
			>
			{/*gradient*/}
			<LinearGradient
				colors={['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.35)', 'rgba(255,255,255,0)']}
				locations={[0, 0.25, 1]}
				style={{ position: 'absolute', height: '100%', width: '100%' }}
			/>
			</Animated.Image>
			</Animated.View>
			<View style={styles.headerContainerStyle}>
				<View style={styles.leftContainerStyle}>
					<Text style={styles.headerText1}>300 Things to do</Text>
					<Text style={styles.headerText2}>No filter Applied</Text>
				</View>
				<View style={styles.rightContainerStyle}>
					<Button
						title='Filter' 
						type='clear'
						titleStyle={{ fontSize: 14, fontFamily: 'Helvetica', color: '#fff' }}
						containerStyle={{ 
							borderWidth: 1, 
							borderColor: '#fff', 
							borderRadius: 5, 
							width: 70, 
							height: 25,
							paddingHorizontal: 5,
							justifyContent: 'center',
							alignItems: 'center'
						}}
					/>
				</View>
			</View>
		</Animated.ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
