import { View, Text, TextInput, Image, TouchableOpacity, Pressable, StyleSheet, Button } from 'react-native';
import React from 'react';
import styles from '../../../styles/styles';
import { CustomButton } from '../../../shared/components/CustomButtons';

const samsung = require('../../../assets/samsung.png');

// const Fonts=()=>{
//   const [loaded] = useFonts({
//     Poppins: require('../../Fonts/static/Poppins-Regular.ttf'),
//   });

//   if (!loaded) {
//     return null;
//   }

// }

export default function MarketProductDetails({ navigation }) {
	return (
		<View style={inlinestyles.view}>
			<View style={inlinestyles.view2}>
				<View style={inlinestyles.view3}>
					<View style={inlinestyles.titleView}>
						<View style={inlinestyles.titleView1}>
							<View>
								<Pressable onPress={() => {}}>
									<Image source={samsung} style={{ height: 40, width: 80 }}></Image>
								</Pressable>
							</View>
							<View style={inlinestyles.productTitleView}>
								<Text style={inlinestyles.productTitleText}>SAMSUNG</Text>
								<Text style={inlinestyles.productTitleText1}> 65-Inch Class Frame Series </Text>
							</View>
						</View>
						<Pressable onPress={() => {}}>
							<Text style={{ color: 'white', fontSize: 13 }}>GOTECH</Text>
						</Pressable>
					</View>
					<View style={{ borderBottomColor: '#C6C6C6', borderBottomWidth: 1 }} />
					<View />
				</View>

				<View style={inlinestyles.bottomView}>
					<View style={{ width: 85 }}>
						<Text style={{ color: 'white' }}>Price</Text>
						<View style={styles.whiteLine} />
						<View />
						<Text style={{ color: '#FFC121' }}>
							190000<Text style={{ color: '#C6C6C6' }}> Leke</Text>
						</Text>
					</View>
					<View>
						<Text style={{ color: 'white' }}>Startin from</Text>
						<View style={styles.whiteLine} />
						<Text style={{ color: '#94AB13' }}>
							1500 <Text style={{ color: '#C6C6C6' }}>Leke/monthly</Text>
						</Text>
						<CustomButton text={'Buy now'} onPress={() => navigation.navigate('Market', { screen: 'SpecificProductDetails' })}></CustomButton>
					</View>
				</View>
			</View>
		</View>
	);
}

const inlinestyles = StyleSheet.create({
	view: {
		padding: 8,
	},
	view2: {
		backgroundColor: '#2C2C2C',
		width: '100%',
		height: 180,
		borderRadius: 7,
	},
	view3: {
		flex: 1,
	},
	titleView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
	},
	titleView1: {
		flexDirection: 'row',
	},
	productTitleView: {
		flexDirection: 'column',
		marginLeft: 10,
	},
	productTitleText: {
		color: 'white',
		fontSize: 15,
		// fontFamily: 'Poppins'
	},
	productTitleText1: {
		color: 'white',
		fontSize: 12,
		lineHeight: 14,
		// fontFamily: 'Poppins'
	},
	bottomView: {
		flex: 1,
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
});
