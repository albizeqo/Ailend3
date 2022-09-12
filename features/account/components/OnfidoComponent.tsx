import React, { useEffect } from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import { Onfido, OnfidoCaptureType, OnfidoCountryCode, OnfidoDocumentType } from '@onfido/react-native-sdk';
// import { BACKEND_URL } from '../../../environment';

export default function OnfidoComponent({ navigation, route }: any) {
	//FIXME: Get applicant id after creating the applicant
	// FIXME: Below is customer id, not applicant id
	const applicantId = 'C53906F568674856A0D4A669355B9520';
	const [sdkToken, setSdkToken] = React.useState('');
	const [loading, setLoading] = React.useState(true);

	//   useEffect(() => {
	//     getSdkToken(applicantId)
	//       .then((data) => data.json())
	//       .then((res) => {
	//         console.log('SDK TOKEN :', JSON.parse(res?.Token).token);
	//         try {
	//           const sdkToken = JSON.parse(res?.Token).token;
	//           if (sdkToken) {
	//             setSdkToken(sdkToken);
	//             setLoading(false);
	//           }
	//         } catch (error) {
	//           console.log('Error :', error);
	//           alert('Error getting sdk token');
	//         }
	//       });
	//   }, []);

	function startSDK() {
		alert('Onfido SDK started');
		// Onfido.start({
		//   sdkToken: sdkToken,
		//   flowSteps: {
		//     welcome: true,
		//     captureFace: {
		//       type: OnfidoCaptureType.PHOTO,
		//     },
		//     captureDocument: {
		//       docType: OnfidoDocumentType.DRIVING_LICENCE,
		//       countryCode: OnfidoCountryCode.GBR,
		//     },
		//   },
		// })
		//   .then((res: any) => console.warn('OnfidoSDK: Success:', JSON.stringify(res)))
		//   .catch((err: any) => console.warn('OnfidoSDK: Error:', err.code, err.message));
	}

	if (loading)
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					flexDirection: 'row',
					padding: 10,
				}}
			>
				<ActivityIndicator size="large" color="black" />
			</View>
		);

	return (
		<SafeAreaView>
			<Text>Onfido</Text>
			<Button title="Start verification" onPress={startSDK}></Button>
		</SafeAreaView>
	);
}

// function getSdkToken(applicantId: string) {
//   try {
//     const response = fetch(`${BACKEND_URL}/api/v1/onfido/token/${applicantId}`, {
//       method: 'GET',
//     });
//     return response;
//   } catch (error) {
//     console.warn('Error:', error);
//     return null;
//   }
// }
