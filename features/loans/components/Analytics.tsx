import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import * as Progress from 'react-native-progress';

var fullWidth = Dimensions.get('window').width;
const dropdown = require('../../../assets/dropdown.png');

export default function Analytics() {
	const [shouldShow, setShouldShow] = useState(true);

	return (
		<View style={inlinestyles.view}>
			<Progress.Bar progress={0.5} width={fullWidth - 40} height={30} color={'#a48d14'} />
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
				<Text style={{ color: 'white' }}>Paid</Text>
				<Text style={{ color: 'white' }}>To be paid</Text>
			</View>
			<View style={inlinestyles.dashboardView}>
				<Text style={inlinestyles.dashboardText}>
					Loan amount:<Text>100000 LEK</Text>
				</Text>
				<Text style={inlinestyles.dashboardText}>
					Next installment:<Text>10000 LEK</Text>
				</Text>
				<Text style={inlinestyles.dashboardText}>
					Due date: <Text>17/03/2022</Text>
				</Text>
			</View>
			<View style={{ backgroundColor: '#2F2F2F', padding: 15 }}>
				<TouchableOpacity onPress={() => setShouldShow(!shouldShow)}>
					<Text style={{ color: 'white', padding: 10 }}>
						Historic <Image source={dropdown}></Image>
					</Text>
				</TouchableOpacity>

				{shouldShow ? (
					<View style={{ padding: 10 }}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={{ color: 'white' }}>12 / 03 / 2022</Text>
							<Text style={{ color: '#A48D14' }}>On time</Text>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={{ color: 'white' }}>12 / 03 / 2022</Text>
							<Text style={{ color: '#A48D14' }}>On time</Text>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={{ color: 'white' }}>12 / 03 / 2022</Text>
							<Text style={{ color: '#A48D14' }}>On time</Text>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
							<Text style={{ color: 'white' }}>12 / 03 / 2022</Text>
							<Text style={{ color: '#A48D14' }}>On time</Text>
						</View>
					</View>
				) : null}
			</View>
		</View>
	);
}

const inlinestyles = StyleSheet.create({
	view: {
		backgroundColor: '#232426',
		height: '100%',
		padding: 20,
	},
	dashboardView: {
		backgroundColor: '#2F2F2F',
		alignItems: 'center',
		padding: 10,
		borderRadius: 4,
		marginTop: 10,
		marginBottom: 10,
	},
	dashboardText: {
		color: 'white',
		padding: 5,
		// fontFamily: 'Poppins'
	},
});
