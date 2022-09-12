import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Menu } from 'react-native-material-menu';
import { YellowButton } from './CustomButtons';

const exit = require('../../assets/exit.png');

export default function ApplyForLoan({ navigation }) {
	const [visible, setVisible] = useState(false);

	return (
		<View>
			<TouchableOpacity style={inlinestyles.btnText}>
				<Menu
					visible={visible}
					style={inlinestyles.menu}
					anchor={
						<YellowButton text="Apply for a loan" onPress={() => setVisible(!visible)}>
							{' '}
						</YellowButton>
					}
					onRequestClose={() => {
						setVisible(false);
					}}
				>
					<TouchableOpacity onPress={() => setVisible(false)}>
						<Image style={{ alignSelf: 'flex-end', width: 20, height: 20 }} source={exit}></Image>
					</TouchableOpacity>

					<View style={{ flex: 1, justifyContent: 'space-evenly' }}>
						<YellowButton text="Money"></YellowButton>
						<YellowButton text="Home"></YellowButton>
						<YellowButton text="Schoolarship"></YellowButton>
						<YellowButton text="Bank Account"></YellowButton>
					</View>
				</Menu>
			</TouchableOpacity>
		</View>
	);
}

const inlinestyles = StyleSheet.create({
	btnText: {
		alignSelf: 'flex-end',
		position: 'absolute',
		bottom: 35,
		right: 35,
	},
	menu: {
		backgroundColor: '#2F2F2F',
		marginTop: -65,
		padding: 10,
		height: 330,
	},
	menuOpt1: {
		backgroundColor: '#A48D14',
		borderRadius: 4,
		marginTop: 10,
		marginBottom: 20,
	},

	menuOpts: {
		backgroundColor: '#A48D14',
		borderRadius: 4,
		marginBottom: 20,
	},
});
