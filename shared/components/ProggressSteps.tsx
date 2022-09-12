import React from 'react';
import { useEffect } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/FontAwesome';

const stepIndicatorStyles = {
	stepIndicatorSize: 30,
	currentStepIndicatorSize: 40,
	separatorStrokeWidth: 2,
	currentStepStrokeWidth: 5,
	stepStrokeCurrentColor: '#94AB13',
	separatorFinishedColor: '#94AB13',
	separatorUnFinishedColor: '#aaaaaa',
	stepIndicatorFinishedColor: '#94AB13',
	stepIndicatorUnFinishedColor: '#aaaaaa',
	stepIndicatorCurrentColor: '#ffffff',
	stepIndicatorLabelFontSize: 12,
	currentStepIndicatorLabelFontSize: 12,
	stepIndicatorLabelCurrentColor: '#000000',
	stepIndicatorLabelFinishedColor: '#ffffff',
	stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
	labelColor: '#666666',
	labelSize: 15,
	currentStepLabelColor: '#fe7013',
};

function renderStepIndicator(stepPosition: number, stepStatus: string) {
	return <Icon name={'check'} size={12} color={stepStatus === 'finished' ? 'white' : 'rgba(255,255,255,0.5)'} />;
}

export default function VerticalStepIndicator() {
	//   const [currentPage, setCurrentPage] = React.useState<number>(0);

	//   const currentStatus = useAppSelector((state) => state.accountState.account.status);

	//   useEffect(() => {
	//     console.log('[Progress Steps] currentStatus', currentStatus);
	//     setCurrentPage(Number(CUSTOMER_STATUS[currentStatus]));
	//   }, [currentStatus]);

	return (
		<View
			style={{
				width: 30,
				height: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				marginRight: 20,
			}}
		>
			<StepIndicator
				customStyles={stepIndicatorStyles}
				stepCount={5}
				direction="vertical"
				currentPosition={1}
				renderStepIndicator={({ position, stepStatus }) => renderStepIndicator(position, stepStatus)}
			/>
		</View>
	);
}

export function TextSteps(props: { style: any; style1: any; style2: any; source: any; text: string; onPress: any }) {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<View style={props.style}>
				<Text style={props.style1}>{props.text}</Text>

				<Image source={props.source} style={props.style2}></Image>
			</View>
		</TouchableOpacity>
	);
}
