import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import styles from '../../../styles/styles';
import { CustomButton } from '../../../shared/components/CustomButtons';

import { OTP } from 'react-native-otp-form';
import { colors } from '../../../styles/colors';

export default function PhoneVerficationCode() {
	let [text, setText] = useState('');

	const customerId = 'C9EBE4ADC1914C95A4426A6003FED04F';
	const phone = '06934344334';

	return (
		<View style={styles.container}>
			<View style={styles.image}>
				<View style={styles.containerView1}>
					{/* <BackArrow ></BackArrow> */}
					{/* <HeaderText text={"Phone verification"} style={inlinestyles.tittleText}></HeaderText> */}
				</View>
				<View style={inlinestyles.view}>
					<View style={inlinestyles.view2}>
						<View style={{ marginBottom: 30 }}>
							<OTP codeCount={6} containerStyle={{ marginTop: 50 }} otpStyles={{ backgroundColor: colors.grayBackground, borderRadius: 4, color: colors.white }} />
						</View>

						<CustomButton text={'Verify Code'} onPress={() => {}}></CustomButton>
					</View>
					<TouchableOpacity>
						<Text style={inlinestyles.codeText}>
							Didn’t receive the code?<Text style={{ fontWeight: 'bold' }}> Send it again</Text>{' '}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const inlinestyles = StyleSheet.create({
	tittleText: {
		color: 'white',
		marginTop: 33,
		marginRight: 60,
		fontWeight: '500',
		fontSize: 18,
		// fontFamily: 'Poppins'
	},

	view: {
		flex: 1,
	},
	view2: {
		padding: 25,
		marginTop: 100,
	},

	input: {
		borderRadius: 4,
		backgroundColor: '#565656',
	},
	codeText: {
		color: 'white',
		marginTop: 30,
		fontWeight: '500',
		fontSize: 15,
		// fontFamily: 'Poppins'
		textAlign: 'center',
	},
});
