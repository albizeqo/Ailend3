import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import styles from '../../styles/styles';
import * as Progress from 'react-native-progress';

export default function LoanInformationHeader() {
	return (
		<View style={inlinestyles.headerContainer}>
			<View style={inlinestyles.contentContainer}>
				<View style={inlinestyles.infoContainer}>
					<Text style={{ color: 'white' }}>Total Loans</Text>
					<View />
					<View style={styles.whiteLine} />
					<Text style={{ color: 'white' }}>
						<Text style={{ color: '#FFC121' }}>300000</Text> Leke
					</Text>
				</View>
				<View style={inlinestyles.limitContainer}>
					<Progress.Bar progress={0.5} width={100} height={15} color={'#94ab13'} />
					<Text style={{ color: 'white' }}>
						Limit:
						<Text style={{ color: '#FFC121' }}> 5000</Text> Leke
					</Text>
					<View />

					{/* <View style={styles.whiteLine} />
					<Text style={{ color: 'white'  }}>
					</Text> */}
				</View>
				<View style={inlinestyles.infoContainer}>
					<Text style={{ color: 'white' }}>Paid</Text>
					<View />
					<View style={styles.whiteLine} />
					<Text style={{ color: 'white' }}>
						<Text style={{ color: '#FFC121' }}>2000</Text> Leke
					</Text>
				</View>
				<View style={inlinestyles.infoContainer}>
					<Text style={{ color: 'white' }}>Next Installment</Text>
					<View />
					<View style={styles.whiteLine} />
					<Text style={{ color: 'white' }}>
						<Text style={{ color: '#FFC121' }}>5000</Text> Leke
					</Text>
				</View>
			</View>
		</View>
	);
}

const inlinestyles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		// backgroundColor: '#232426',
		backgroundColor: 'red',
		width: '100%',
		height: '100%',
		// marginLeft: -15,
	},
	contentContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		marginTop: 10,
	},
	infoContainer: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: '#2F2F2F',
		borderRadius: 10,
		margin: 5,
		padding: 5,
		width: 130,
		height: 50,
	},
	limitContainer: {
		// flexDirection: 'column',
		// justifyContent: 'space-between',
		// backgroundColor: '#2F2F2F',
		// borderRadius: 10,
		margin: 5,
		padding: 5,
		width: 130,
		height: 50,
	},
	whiteLine: {
		borderBottomColor: '#FFFFFF',
		borderBottomWidth: 0.5,
	},
});
