import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import SliderWithDetails from '../../../shared/components/Slider/SliderWithDetails';

export default function CalculateOffer() {
	return (
		<ScrollView>
			<View style={inlinestyles.view}>
				<View>
					<View style={inlinestyles.view2}>
						<SliderWithDetails
							text={'Kesti mujor me perafersi'}
							text1={'67,937 Lek'}
							style={inlinestyles.calculteView}
							style1={inlinestyles.text}
							style2={inlinestyles.text2}
						></SliderWithDetails>
						<SliderWithDetails
							text={'Kohezgjatja e kredise'}
							text1={'1 vit (12 muaj)'}
							style={inlinestyles.calculteView}
							style1={inlinestyles.text}
							style2={inlinestyles.text2}
						></SliderWithDetails>
						<SliderWithDetails
							text={'Shuma e kredise'}
							text1={'1,000,000 LEK'}
							style={inlinestyles.calculteView}
							style1={inlinestyles.text}
							style2={inlinestyles.text2}
						></SliderWithDetails>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

const inlinestyles = StyleSheet.create({
	view: {
		marginTop: 3,
	},
	view2: {
		padding: 5,
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
	text2: {
		color: 'white',
		backgroundColor: '#2F2F2F',
		padding: 7,
		borderRadius: 5,
	},
});
