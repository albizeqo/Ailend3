import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Platform } from 'react-native';
import styles from '../../../styles/styles';
import { CustomButton } from '../../../shared/components/CustomButtons';
import { OTP } from 'react-native-otp-form';

import { colors } from '../../../styles/colors';
// const logo = require('../../assets/ailendlogo.png');
// const flag = require('../../assets/Flag.png');
// const arrow = require('../../assets/arrow.png');

export default function VerifyEmail() {
	// const [loaded] = useFonts({
	// 	Poppins: require('../../Fonts/static/Poppins-Regular.ttf'),
	// });

	// if (!loaded) {
	// 	return null;
	// }

	return (
		<View style={styles.container}>
			<View style={styles.image}>
				<View style={styles.containerView1}>
					{/* <BackArrow ></BackArrow> */}
					{/* <Header navigate={""} source={logo} source1={flag} styles={styles.logoImage} styles1={styles.flagImage}></Header> */}
				</View>

				{/* Verify email */}
				<View>
					<Text style={styles.title}>Verify your email</Text>
				</View>
				<View style={{ marginTop: 80, marginBottom: 60 }}>
					<OTP codeCount={6} containerStyle={{ marginTop: 50 }} otpStyles={{ backgroundColor: colors.grayBackground, borderRadius: 4, color: colors.white }} />
				</View>
				<CustomButton text="Continue" onPress={() => {}}></CustomButton>
			</View>
		</View>
	);
}
