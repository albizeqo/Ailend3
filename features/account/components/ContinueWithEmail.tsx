import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { YellowButton } from '../../../shared/components/CustomButtons';
import styles from '../../../styles/styles';

export default function ContinueWithEmail() {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>Time matters.Apply Online!</Text>
			</View>

			<TextInput keyboardType={'numbers-and-punctuation'} placeholder={'Email'} placeholderTextColor={'white'} style={styles.textInput}></TextInput>
			<TextInput keyboardType={'numbers-and-punctuation'} placeholder={'Password'} placeholderTextColor={'white'} secureTextEntry={true} style={styles.textInput}></TextInput>
			<YellowButton text={'Continue'}></YellowButton>

			<Text style={styles.termsPolicyText}>
				By creating an account, I accept <Text style={styles.termsPolicyTextBold}>Privacy Policy</Text>
			</Text>
			<View style={styles.whiteLine} />
			<View />
			<Text style={styles.text}>
				Already have and account?{' '}
				<Text style={styles.login} onPress={() => console.log('Logged')}>
					{' '}
					Log in
				</Text>
			</Text>
		</View>
	);
}
