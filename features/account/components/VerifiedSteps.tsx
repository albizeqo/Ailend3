import React from 'react';
import { Text, View, Image, TouchableOpacity, Platform, StyleSheet, } from 'react-native';
import VerticalStepIndicator, { TextSteps } from '../../../shared/components/ProggressSteps';
import { colors } from '../../../styles/colors';
import styles from '../../../styles/styles';

const arrowright = require('../../../assets/arrow-right.png');

export default function VerifiedSteps({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.image}>
				<Text style={styles.title1}>Complete all the steps to get acccess to the full potential of AiLend</Text>

				<View
					style={{
						paddingBottom: 80,
						paddingTop: 50,
						paddingHorizontal: 30,
						flex: 1,
						backgroundColor: colors.blackBackground,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<VerticalStepIndicator></VerticalStepIndicator>
					<View style={inlinestyles.accView}>
						<TextSteps
							style={inlinestyles.View}
							style1={inlinestyles.ViewText}
							style2={inlinestyles.ViewImage}
							source={arrowright}
							text={'Email verification'}
							onPress={() => {
								navigation.navigate('VerifyEmail');
							}}
						></TextSteps>
						<TextSteps
							style={inlinestyles.View}
							style1={inlinestyles.ViewText}
							style2={inlinestyles.ViewImage}
							source={arrowright}
							text={'Phone verification'}
							onPress={() => {
								navigation.navigate('PhoneVerification');
							}}
						></TextSteps>
						<TextSteps
							style={inlinestyles.View}
							style1={inlinestyles.ViewText}
							style2={inlinestyles.ViewImage}
							source={arrowright}
							text={'Complete KYC'}
							onPress={() => {
								navigation.navigate('Kyc');
							}}
						></TextSteps>
						<TextSteps
							style={inlinestyles.View}
							style1={inlinestyles.ViewText}
							style2={inlinestyles.ViewImage}
							source={arrowright}
							text={'Identity verification'}
							onPress={() => {
								navigation.navigate('Onfido');
							}}
						></TextSteps>
						<TextSteps
							style={inlinestyles.View}
							style1={inlinestyles.ViewText}
							style2={inlinestyles.ViewImage}
							source={arrowright}
							text={'Certificate & salary proof'}
							onPress={() => {
								navigation.navigate('Document');
							}}
						></TextSteps>
					</View>
				</View>
			</View>
		</View>
	);
}

const inlinestyles = StyleSheet.create({
	accView: {
		height: '100%',
		justifyContent: 'space-around',
		flex: 1,
	},
	View: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	ViewText: {
		color: 'white',
		fontSize: 20,
		marginLeft: 5,
	},

	ViewImage: {
		marginLeft: 20,
		height: 14,
		width: 8,
	},
});
