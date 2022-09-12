import { Pressable, StyleSheet, Text, View } from 'react-native';
import styles from '../../../styles/styles';
import React from 'react';

export default function ChooseOffer() {
	return (
		<View style={inlinestyles.view}>
			<View style={inlinestyles.view2}>
				<View style={{ marginBottom: 20 }}>
					<Text style={inlinestyles.text}>Shtepi:3 vite interes fiks</Text>
					<View style={styles.whiteLine} />
					<View />
				</View>
				<View style={inlinestyles.calculteView}>
					<View style={{ marginBottom: 10 }}>
						<Text style={inlinestyles.text1}>Shuma e kredise</Text>
						<Text style={{ color: 'white' }}>100,000 LEK</Text>
					</View>
					<View style={{ marginRight: 74 }}>
						<Text style={inlinestyles.text}>Kohezgjatja</Text>
						<Text style={{ color: 'white' }}>
							2 vite <Text>(24 muaj)</Text>
						</Text>
					</View>
				</View>
				<View style={inlinestyles.calculteView}>
					<View style={{ marginBottom: 10 }}>
						<Text style={inlinestyles.text1}>Kesti per 3 vite</Text>
						<Text style={{ color: 'white' }}>5,457 LEK</Text>
					</View>
					<View>
						<Text style={inlinestyles.text1}>Interesi pas periudhes fikse </Text>
						<Text style={{ color: 'white' }}>12.00%</Text>
					</View>
				</View>
				<View style={inlinestyles.calculteView}>
					<View>
						<Text style={inlinestyles.text1}>Interesi fiks</Text>
						<Text style={{ color: 'white' }}>5.00% per 3 vite</Text>
					</View>
					<View>
						<Pressable style={{ marginRight: 20, width: 100 }}>
							<Text style={inlinestyles.btn}>Zgjidh</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</View>
	);
}

const inlinestyles = StyleSheet.create({
	view: {
		backgroundColor: '#2C2C2C',
		borderRadius: 7,
	},
	view2: {
		padding: 10,
	},
	calculteView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	text: {
		color: 'white',
		fontWeight: '700',
		fontSize: 15,
	},
	text1: {
		color: 'white',
		fontWeight: '700',
	},
	text2: {
		color: 'white',
		backgroundColor: '#2F2F2F',
		padding: 7,
		borderRadius: 5,
	},
	btn: {
		color: 'white',
		backgroundColor: '#A48D14',
		borderRadius: 5,
		padding: 10,
		width: '100%',
		textAlign: 'center',
		margin: 10,
		fontWeight: '700',
	},
});
