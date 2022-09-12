import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Loans from '../features/loans/components/Loans';
import Analytics from '../features/loans/components/Analytics';
import Timeline from '../features/loans/components/Timeline';
import LoanInformationHeader from '../shared/components/LoanInformationHeader';
import LoanCategory from '../features/loans/components/LoanCategory';
import LoanApplication from '../features/loans/components/LoanApplication';

const Stack = createStackNavigator();
var width = Dimensions.get('window').width;

export default function MyLoans() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerTitle: () => <LoanInformationHeader />,
				headerStyle: {
					height: 140,
					backgroundColor: '#232426',
				},
			}}
			initialRouteName={'LoanCategory'}
		>
			<Stack.Group>
				<Stack.Screen name="LoanCategory" component={LoanCategory} />
				<Stack.Screen name="Loans" component={Loans} />
				<Stack.Screen name="Analytics" component={Analytics} />
				<Stack.Screen name="Timeline" component={Timeline} />
				<Stack.Screen name="LoanApplication" component={LoanApplication} />
			</Stack.Group>
		</Stack.Navigator>
	);
}
