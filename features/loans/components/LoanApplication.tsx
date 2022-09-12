import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import ApplyForLoan from '../../../shared/components/ApplyForLoan';
import styles from '../../../styles/styles';

const elektro = require('../../../assets/elektro.png');

export default function LoanApplication() {
	return (
		<>
			<ScrollView>
				<View style={inlinestyles.fullContainer}>
					<View style={inlinestyles.applicationContainer}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
							<View style={{ flexDirection: 'row' }}>
								<View>
									<Image source={elektro} style={{ height: 40, width: 80 }}></Image>
								</View>
								<View style={{ flexDirection: 'column', marginLeft: 10 }}>
									<Text style={{ color: 'white', fontSize: 15 }}>SET LAVATRICE LG</Text>
									<Text style={{ color: 'white', fontSize: 12, lineHeight: 14, fontWeight: '700' }}> WIN WASH LV1018 + LV1020</Text>
								</View>
							</View>
							<Text style={{ color: 'white', fontSize: 15 }}>Neptun</Text>
						</View>
						<View style={{ borderBottomColor: '#C6C6C6', borderBottomWidth: 1 }} />
						<View />
					</View>
					<View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C2C2C' }}>
						<View style={{ flexDirection: 'column' }}>
							<View style={{ width: 85 }}>
								<Text style={{ color: 'white' }}>Loan</Text>
								<View style={styles.whiteLine} />
								<View />
								<Text style={{ color: '#FFC121' }}>
									190000<Text style={{ color: '#C6C6C6' }}> Leke</Text>
								</Text>
							</View>
							<View style={{ width: 85 }}>
								<Text style={{ color: 'white' }}>Paid</Text>
								<View style={styles.whiteLine} />
								<View />
								<Text style={{ color: '#4285F4' }}>
									50000<Text style={{ color: '#C6C6C6' }}> Leke</Text>
								</Text>
							</View>
						</View>
						<View style={{ marginTop: 35 }}>
							<Text style={{ color: 'white' }}>Next Installment</Text>
							<View style={styles.whiteLine} />
							<Text style={{ color: '#EB4335' }}>
								1500{' '}
								<Text style={{ color: '#FFFFFF' }}>
									{' '}
									Leke <Text style={{ fontSize: 10, color: '#FFFFFF' }}>01/01/22</Text>
								</Text>
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
			<ApplyForLoan navigation={undefined}></ApplyForLoan>
		</>
	);
}

const inlinestyles = StyleSheet.create({
	fullContainer: {
		backgroundColor: '#232426',
		// height: '100%',
	},
	applicationContainer: {
		backgroundColor: '#2C2C2C',
		marginTop: 10,
	},
});
