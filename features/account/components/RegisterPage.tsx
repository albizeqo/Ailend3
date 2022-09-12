import { Text, View, Image, ImageBackground, TouchableOpacity, Pressable, Button } from 'react-native';

//   import * as RootNavigation from '../../RootNavigation'
import { useFonts } from 'expo-font';
//   import Header from "../Components/HeaderComponent";
import React from 'react';
import { CustomButton } from '../../../shared/components/CustomButtons';
import styles from '../../../styles/styles';

const image = require('../../../assets/header/foto1.png');
// const logo = require('../../assets/ailendlogo.png');
// const flag = require('../../assets/Flag.png');
// const google = require('../../assets/google.png');
// const facebook = require('../../assets/facebook.png');

export default function RegisterPage() {
	// const [loaded] = useFonts({
	// 	Poppins: require('../../Fonts/static/Poppins-Regular.ttf'),
	// });

	// if (!loaded) {
	// 	return null;
	// }

	return (
		<View style={styles.container}>
			<ImageBackground style={styles.image} source={image}>
				<View style={styles.containerView}>{/* <Header navigate={"Menu"} source={logo} styles={styles.logoImage} source1={flag} styles1={styles.flagImage}></Header> */}</View>

				{/* Time matters */}
				<View>
					<Text style={styles.title}>Time matters.Apply Online!</Text>
				</View>

				{/* Butonat */}
				<View style={styles.btn}>
					<CustomButton text={'Continue with google'} onPress={() => {}}></CustomButton>

					<CustomButton text={'Continue with Facebook'} onPress={() => {}}></CustomButton>

					<CustomButton text={'Continue with email'} onPress={() => {}}></CustomButton>
					<CustomButton text={'Continue with phone number'} onPress={() => {}}></CustomButton>
				</View>

				<Text style={styles.termsPolicyText}>
					I accept AiLend’s <Text style={styles.termsPolicyTextBold}>Terms of Use</Text> and <Text style={styles.termsPolicyTextBold}>Privacy Policy</Text>
				</Text>

				<View style={styles.whiteLine} />
				<View />
				<Text style={styles.text}>
					Already have and account? <Text style={styles.login}> Log in</Text>
				</Text>
			</ImageBackground>
		</View>
	);
}
