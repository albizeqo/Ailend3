import TextTicker from 'react-native-text-ticker';
import React from 'react';

export default function FlashOffer(props: { style: any; text: string }) {
	return (
		<TextTicker style={props.style} duration={4000} loop repeatSpacer={50} marqueeDelay={1000}>
			{props.text}
		</TextTicker>
	);
}
