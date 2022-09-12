import { View } from 'react-native';
import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default function Slider() {
	return (
		<View style={{ marginTop: -10 }}>
			<MultiSlider
				sliderLength={330}
				selectedStyle={{ backgroundColor: '#A48D14', height: 3, borderRadius: 5 }}
				trackStyle={{ backgroundColor: '#3E3E3E' }}
				markerContainerStyle={{ backgroundColor: '#A48D14', borderRadius: 20, height: 20, marginTop: 15 }}
				markerStyle={{ backgroundColor: '#A48D14' }}
				min={100}
				max={10000}
			></MultiSlider>
		</View>
	);
}
