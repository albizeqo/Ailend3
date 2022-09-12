/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import BuyWithAilendQrScanner from '../features/Market/components/BuyWithAilendQrScanner';
import ProductInfo from '../features/Market/components/ProductInfo';
import LoanInformationHeader from '../shared/components/LoanInformationHeader';



const Stack = createStackNavigator();
export default function BuyWithAilendPage() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerTitle: () => <LoanInformationHeader />,
				headerLeft: () => null,
				headerStyle: {
					height: 140,
					backgroundColor: '#232426',
				},
			}}
			initialRouteName={'BuyWithAilend'}
		>
			<Stack.Screen name="BuyWithAilend" component={BuyWithAilendQrScanner} options={{ headerShown: false }} />
			<Stack.Screen name="ProductInfo" component={ProductInfo} />
		</Stack.Navigator>
	);
}
