import React, { useState } from 'react';
import { View, StyleSheet, Alert, TextInput } from 'react-native';
import styles from '../../../styles/styles';
import { CustomButton } from '../../../shared/components/CustomButtons';

export default function PhoneVerfication({ navigation }) {
	const [text, setText] = useState('');

	// const [loaded] = useFonts({
	// 	Poppins: require('../../Fonts/static/Poppins-Regular.ttf'),
	// });

	// if (!loaded) {
	// 	return null;
	// }

	const customerId = 'C9EBE4ADC1914C95A4426A6003FED04F';
	let phone = text;

	// async function handlerFunction() {

	//  Alert.alert("Your code is:", otp)
	//     await requestPhoneVerification(customerId, phone);

	// }

	return (
		<View style={styles.container}>
			<View style={styles.image}>
				<View style={styles.containerView1}>
					{/* <BackArrow></BackArrow> */}

					{/* <HeaderText text={"Phone verification"} style={inlinestyles.tittleText}></HeaderText> */}
				</View>
				<View style={inlinestyles.view}>
					<View style={inlinestyles.view2}>
						<TextInput
							keyboardType={'number-pad'}
							placeholder={'Add a phone number(+355)'}
							placeholderTextColor={'white'}
							secureTextEntry={false}
							style={inlinestyles.textInput}
							defaultValue={text}
							onChangeText={(newtext: React.SetStateAction<string>) => setText(newtext)}
							value={undefined}
							// open={undefined}
							editable={true}
						></TextInput>
						<View style={{ marginTop: 20 }}>
							<CustomButton text="Send Code" onPress={() => navigation.navigate('PhoneVerificationCode')}></CustomButton>
						</View>
					</View>
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
		marginTop: 70,
	},

	textInput: {
		opacity: 1,
		color: '#FFFFFF',
		backgroundColor: '#2C2C2C',
		height: 40,
		marginTop: 50,
		borderWidth: 1,
		borderColor: '#2C2C2C',
		padding: 10,
	},
});
