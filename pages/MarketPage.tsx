import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ProductDetailsView from '../features/Market/components/ProductDetailsView';
import ProductsView from '../features/Market/components/ProductsView';

const Stack = createStackNavigator();
export default function MarketPage({ route, navigation }: any) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName={'ProductsView'}
		>
			<Stack.Group>
				<Stack.Screen name="ProductsView" component={ProductsView} />
				<Stack.Screen name="ProductDetailView" component={ProductDetailsView} />
			</Stack.Group>
		</Stack.Navigator>
	);
}
