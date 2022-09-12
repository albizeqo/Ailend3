// import React from 'react';
// import { Image, ImageBackground, Pressable, Text, TextInput, View } from 'react-native';

// import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// import styles from '../../../styles/styles';

// const world = require('../../assets/world.png');
// const arrow = require('../../assets/arrow.png');

// export default function FAQ({ navigation }) {
// 	return (
// 		<View>
// 			<ImageBackground source={world} style={{ width: '100%' }}>
// 				<View style={styles.containerView1}>
// 					<TouchableOpacity onPress={() => navigation.goBack()}>
// 						<Image
// 							style={{
// 								marginTop: 20,
// 								height: 20,
// 								width: 10,
// 							}}
// 							source={arrow}
// 						/>
// 					</TouchableOpacity>
// 					<Text
// 						style={{
// 							color: 'white',
// 							marginTop: 20,
// 							marginRight: 100,
// 							fontWeight: '500',
// 							fontSize: 18,
// 						}}
// 					>
// 						ailend.io
// 					</Text>
// 				</View>
// 				<Text style={{ color: 'white', textAlign: 'center', marginTop: 40, fontSize: 25, fontWeight: '500' }}>How can we help you?</Text>
// 				<TextInput
// 					style={{
// 						opacity: 1,
// 						color: '#FFFFFF',
// 						backgroundColor: '#2C2C2C',
// 						height: 49,
// 						margin: 12,
// 						borderWidth: 1,
// 						borderColor: '#2C2C2C',
// 						padding: 10,
// 						borderRadius: 7,
// 					}}
// 					placeholder="Search here..."
// 					placeholderTextColor={'white'}
// 				/>
// 			</ImageBackground>

// 			<ScrollView>
// 				<View style={{ backgroundColor: '#202123', height: '100%', flexWrap: 'wrap' }}>
// 					<View style={{ padding: 50, marginTop: 10, alignItems: 'center' }}>
// 						<Text style={{ color: 'white', marginBottom: 30, fontSize: 18, fontWeight: '400' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
// 						<Text style={{ color: 'white', marginBottom: 30 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
// 						<Text style={{ color: 'white', marginBottom: 30, fontSize: 18, fontWeight: '400' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
// 						<Text style={{ color: 'white', marginBottom: 30 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
// 						<Text style={{ color: 'white', marginBottom: 30, fontSize: 18, fontWeight: '400' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
// 						<Text style={{ color: 'white', marginBottom: 30 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
// 					</View>
// 				</View>
// 			</ScrollView>
// 		</View>
// 	);
// }
