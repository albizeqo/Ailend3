import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { colors } from '../../styles/colors';

// Custom Button
export function CustomButton(props: { text: string; onPress: () => void }) {
	return (
		<TouchableOpacity
			onPress={props.onPress}
			style={{
				justifyContent: 'center',
				alignContent: 'center',
				alignItems: 'center',
				borderColor: colors.gold,
				borderWidth: 1,
				borderRadius: 5,
				paddingHorizontal: 20,
				paddingVertical: 5,
				width: '100%',
			}}
		>
			<Text
				style={{
					textAlign: 'center',
					fontWeight: '400',
					color: colors.gold,
					fontSize: 14,
				}}
			>
				{props.text}
			</Text>
		</TouchableOpacity>
	);
}

export function BuySellButton({ isSell, text, onPress }: { isSell: boolean; text: number; onPress: () => void }) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: isSell ? colors.red : colors.blue,
				paddingVertical: 5,
				borderRadius: 10,
				width: 160,
			}}
		>
			<View style={{ flexDirection: 'column', alignItems: 'center' }}>
				<Text
					style={{
						color: colors.white,
						fontWeight: '600',
						fontSize: 16,
						marginBottom: 5,
					}}
				>
					{isSell ? 'Sell' : 'Buy'}
				</Text>
				<Text
					style={{
						color: colors.white,
						fontWeight: '600',
						fontSize: 20,
					}}
				>
					{text}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

export const YellowButton = ({ text, onPress }: any) => (
	<TouchableOpacity
		onPress={onPress}
		style={{
			backgroundColor: colors.gold,
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 20,
			paddingHorizontal: 30,
			paddingVertical: 10,
		}}
	>
		<Text style={{ color: colors.blackBackground, fontSize: 15, fontWeight: '400' }}>{text}</Text>
	</TouchableOpacity>
);

export const ModalButton = ({ isSell, text, onPress }: { isSell: boolean; hasBalance: boolean; text: any; onPress: () => void }) => (
	<TouchableOpacity
		onPress={onPress}
		style={{
			backgroundColor: isSell ? colors.red : colors.blue,
			justifyContent: 'center',
			alignItems: 'center',
			borderRadius: 20,
			paddingHorizontal: 30,
			paddingVertical: 10,
		}}
	>
		<Text style={{ color: colors.white, fontSize: 16, fontWeight: '600' }}>{text}</Text>
	</TouchableOpacity>
);
