import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import FlashOffer from '../../../shared/components/FlashOffer';
import MarketProductDetails from './MarketProductDetails';
import { colors } from '../../../styles/colors';

const filterArrow = require('../../../assets/filterArrow.png');

export default function MarketProduct({ navigation }) {
	return (
		<View style={inlinestyles.view}>
			<View>
				<View style={inlinestyles.view2}>
					<Text style={inlinestyles.text}>
						Filters <Image source={filterArrow}></Image>
					</Text>
					<TextInput keyboardType={undefined} placeholder={'Search'} placeholderTextColor={'white'} secureTextEntry={false} style={inlinestyles.textInput}></TextInput>
				</View>
			</View>
			<ScrollView>
				<MarketProductDetails navigation={undefined} />
				<MarketProductDetails navigation={undefined} />
			</ScrollView>
		</View>
	);
}

const inlinestyles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: '#232426',
	},
	textTick: {
		color: '#94AB13',
		borderRadius: 7,
		backgroundColor: '#2F2F2F',
		padding: 5,
		justifyContent: 'space-around',
		// fontFamily: 'Poppins'
	},
	view2: {
		flexDirection: 'row',
		padding: 10,
		alignItems: 'center',
	},
	text: {
		color: 'white',
		backgroundColor: '#2C2C2C',
		width: 70,
		textAlign: 'center',
		height: 35,
		borderRadius: 7,
		padding: 9,
		// fontFamily: 'Poppins'
	},
	textInput: {
		opacity: 1,
		color: '#FFFFFF',
		backgroundColor: '#2C2C2C',
		height: 35,
		margin: 12,
		borderWidth: 1,
		borderColor: '#2C2C2C',
		padding: 10,
		flex: 1,
		borderRadius: 7,
		// fontFamily: 'Poppins'
	},
});
