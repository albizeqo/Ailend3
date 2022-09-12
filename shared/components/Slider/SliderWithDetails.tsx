import React from 'react';
import { View, Text } from 'react-native';
import Slider from './Slider';

export default function SliderWithDetails(props: { text: string; text1: string; style: any; style1: any; style2: any }) {
	return (
		<View>
			<View style={props.style}>
				<Text style={props.style1}>{props.text}</Text>
				<Text style={props.style2}>{props.text1}</Text>
			</View>
			<Slider />
		</View>
	);
}
