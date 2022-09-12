import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CustomButton } from '../../../shared/components/CustomButtons';
import styles from '../../../styles/styles';

// const Fonts=()=>{
//   const [loaded] = useFonts({
//     Poppins: require('../../Fonts/static/Poppins-Regular.ttf'),
//   });

//   if (!loaded) {
//     return null;
//   }

// }

const bigScreen = require('../../../assets/bigimage.png');
const screen = require('../../../assets/screen.png');
const screen1 = require('../../../assets/screen1.png');
const screen2 = require('../../../assets/screen2.png');
const screen3 = require('../../../assets/screen3.png');
const screen4 = require('../../../assets/screen4.png');
const screen5 = require('../../../assets/screen5.png');
const screen6 = require('../../../assets/screen6.png');

export default function ProductDetailsView() {
	return (
		<View style={styles.container}>
			<View style={styles.image}>
				<View style={{ flex: 1 }}>
					<ScrollView>
						<View>
							<View style={{ padding: 20 }}>
								<Image source={bigScreen} style={{ width: '100%', height: 180 }}></Image>
							</View>
							<View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 15 }}>
								<Image source={screen} style={inlinestyle.smallImg}></Image>
								<Image source={screen1} style={inlinestyle.smallImg}></Image>
								<Image source={screen2} style={inlinestyle.smallImg}></Image>
								<Image source={screen3} style={inlinestyle.smallImg}></Image>
								<Image source={screen4} style={inlinestyle.smallImg}></Image>
								<Image source={screen5} style={inlinestyle.smallImg}></Image>
								<Image source={screen6} style={inlinestyle.smallImg}></Image>
							</View>
						</View>
						<View style={{ padding: 20 }}>
							<Text style={{ color: '#C6C6C6', fontSize: 25, fontWeight: '500' }}>SAMSUNG 65-Inch Class Frame Series </Text>
						</View>
						<View style={{ marginLeft: 20 }}>
							<Text style={{ color: '#94AB13' }}>
								1,400 <Text style={{ color: '#C6C6C6' }}>LEKE / monthly</Text>
							</Text>
						</View>
						<View style={{ padding: 20 }}>
							<Text style={{ color: '#C6C6C6' }}>
								The Frame is a TV with an elegant and modern frame that blends seamlessly with your decor. Not only does it enhance your space like a TV, but it becomes part of your
								personal gallery as a work of art. Experience the modern way of displaying your personal art collection, from great works of art to your favorite personal photos. When
								turned on, it's an amazing TV. When it is turned off, it is like a work of art. Samsung's Quantum Dot technology offers a full 100% color volume, while Dual LED
								technology enhances contrast based on the backlight temperature for optimal color tone. Combine them and you will see truly realistic colors that retain rich detail and
								texture - even at wide angles.
							</Text>
						</View>
						<View style={{ padding: 29 }}>
							<CustomButton text={'Complete Order'} onPress={() => {}}></CustomButton>
						</View>
						{/* <OrderInfo style={inlinestyle.orderInfo} text={"SKU:"} text1={"TV475"} text2={"Category:"} text3={"QLED, Television"} text4={"TAG:"} text5={"ONLINE OFFER"}></OrderInfo> */}
						<View style={{ padding: 10 }}>
							<Text style={{ color: '#C6C6C6', fontSize: 18, fontWeight: '500' }}>You may also like:</Text>
							{/* <ElectronicMarket /> */}
						</View>
					</ScrollView>
				</View>
			</View>
		</View>
	);
}

const inlinestyle = StyleSheet.create({
	btn: {
		backgroundColor: '#A48D14',
		borderRadius: 4,
		marginTop: 5,
		padding: 5,
		width: 130,
	},
	buttonBuy: {
		backgroundColor: '#A48D14',
		borderRadius: 4,
		marginTop: 4,
		padding: 5,
		color: 'white',
		// fontFamily: 'Poppins'
	},

	smallImg: {
		width: 40,
		height: 40,
		borderRadius: 6,
	},

	orderInfo: {
		color: '#C6C6C6',
		fontSize: 15,
		fontWeight: '500',
		// fontFamily: 'Poppins'
	},
});
