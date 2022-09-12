import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Calculator from './Calculator';
import MarketProduct from '../../Market/components/MarketProduct';
import LoanApplication from './LoanApplication';

export default function Loans() {
	return (
		<View style={inlinestyles.view}>
			<LoanApplication></LoanApplication>
		</View>
	);
}

const inlinestyles = StyleSheet.create({
	view: {
		backgroundColor: '#232426',
		height: '100%',
	},
});
