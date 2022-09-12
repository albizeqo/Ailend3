import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import FlashOffer from '../../../shared/components/FlashOffer';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import MarketProduct from './MarketProduct';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function ProductsView() {
	return (
		<View style={inlinestyles.container}>
			<View style={inlinestyles.image}>
				<FlashOffer style={inlinestyles.textTick} text={'*Raiffeisen Bank: Interest rate reduced by 2% for personal loans.-*GOTECH 50%'}></FlashOffer>
				<Tab.Navigator
					initialRouteName="MarketProduct"
					screenOptions={{
						tabBarLabelStyle: {
							fontSize: 13,
							color: 'white',
						},
						tabBarStyle: {
							backgroundColor: '#232426',
						},
					}}
				>
					<Tab.Screen
						name="MarketProduct"
						component={MarketProduct}
						options={{
							tabBarLabel: 'Electronic',
							tabBarIndicatorStyle: {
								backgroundColor: '#232426',
							},
						}}
					/>
				</Tab.Navigator>
			</View>
		</View>
	);
}

const inlinestyles = StyleSheet.create({
	textTick: {
		color: '#94AB13',
		borderRadius: 7,
		backgroundColor: '#2F2F2F',
		padding: 5,
		justifyContent: 'space-around',
		// fontFamily: 'Poppins'
	},
	container: {
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	image: {
		opacity: 1,
		flex: 1,
		width: '100%',
		backgroundColor: '#202123',
	},
});
