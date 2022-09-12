import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import Analytics from './Analytics';
import Loans from './Loans';
import Timeline from './Timeline';

const Tab = createMaterialTopTabNavigator();

export default function LoanCategory() {
	return (
		<Tab.Navigator
			initialRouteName="Loans"
			screenOptions={{
				tabBarActiveTintColor: 'red',
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
				name="Loans"
				component={Loans}
				options={{
					tabBarLabel: 'Loans',
					tabBarIndicatorStyle: {
						backgroundColor: 'white',
					},
				}}
			/>
			<Tab.Screen
				name="Analytics"
				component={Analytics}
				options={{
					tabBarLabel: 'Analytics',
					tabBarIndicatorStyle: {
						backgroundColor: 'white',
					},
				}}
			/>
			<Tab.Screen
				name="Timeline"
				component={Timeline}
				options={{
					tabBarLabel: 'Timeline',
					tabBarIndicatorStyle: {
						backgroundColor: 'white',
					},
				}}
			/>
		</Tab.Navigator>
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
