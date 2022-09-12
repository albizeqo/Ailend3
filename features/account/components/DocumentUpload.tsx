import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { YellowButton } from '../../../shared/components/CustomButtons';
import styles from '../../../styles/styles';

export default function Documents({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.image}>
				<View style={inlinestyles.view}>
					<View style={inlinestyles.view2}>
						<YellowButton text={'Upload Certificate'}></YellowButton>
						<Text style={inlinestyles.textUpload}>Certificate uploaded</Text>
						<View style={{ marginTop: 20 }}>
							<YellowButton text={'Upload salary proof'} onPress={() => navigation.navigate('VerifiedSteps')}></YellowButton>
						</View>
						<Text style={inlinestyles.textUpload}>Salary proof uploaded</Text>
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
		marginRight: 50,
		fontWeight: '500',
		fontSize: 18,
		// fontFamily: 'Poppins'
	},
	view: {
		flex: 1,
	},

	view2: {
		padding: 25,
		marginTop: 25,
	},
	textUpload: {
		color: 'white',
		marginTop: 30,
		fontSize: 13,
		textAlign: 'center',
	},

	uploadBtn: {
		backgroundColor: '#A48D14',
		borderRadius: 4,
		marginTop: 30,
	},
});
