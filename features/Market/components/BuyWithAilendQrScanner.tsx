import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';

// function tryParseJSONObject(jsonString) {
// 	try {
// 		var o = JSON.parse(jsonString);

// 		// Handle non-exception-throwing cases:
// 		// Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
// 		// but... JSON.parse(null) returns null, and typeof null === "object",
// 		// so we must check for that, too. Thankfully, null is falsey, so this suffices:
// 		if (o && typeof o === 'object') {
// 			return o;
// 		}
// 	} catch (e) {}

// 	return false;
// }

export default function BuyWithAilendQrScanner({ navigation }) {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);
	// useEffect(() => {
	// 	(async () => {
	// 		const { status } = await BarCodeScanner.requestPermissionsAsync();
	// 		setHasPermission(status === 'granted');
	// 	})();
	// }, []);
	// const handleBarCodeScanned = ({ type, data }) => {
	// 	setScanned(true);
	// 	console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
	// 	if (tryParseJSONObject(data)) {
	// 		let item = tryParseJSONObject(data);
	// 		navigation.navigate('ProductInfo', item);
	// 	}
	// };
	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}
	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					bottom: 0,
					top: 0,
				}}
			/>
			{scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
		</View>
	);
}
