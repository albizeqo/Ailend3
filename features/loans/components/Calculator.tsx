import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../../styles/styles';
import CalculateOffer from './CalculateOffer';
import ChooseOffer from './ChooseOffer';
// import HeaderLoanShown from "../Components/HeaderLoanShown";

export default function Calculator() {
	return (
		<View style={styles.container}>
			<View style={styles.image}>
				{/* <HeaderLoanShown/> */}
				<View style={{ padding: 10, flex: 1 }}>
					<ChooseOffer />
					<CalculateOffer />
				</View>
			</View>
		</View>
	);
}
