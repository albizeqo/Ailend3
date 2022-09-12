// import * as React from 'react';
// import { View, StyleSheet, ActivityIndicator } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { colors } from '../../../styles/colors';
// import { useAppSelector } from '../../../app/hooks';

// export default function Onfido() {
// 	const customerId = useAppSelector((state) => state.accountState.account.customer_id);
// 	const [loading, setLoading] = React.useState(true);

// 	React.useEffect(() => {
// 		if (customerId) {
// 			setLoading(false);
// 		}
// 	}, [customerId]);

// 	if (loading)
// 		return (
// 			<View
// 				style={{
// 					flex: 1,
// 					justifyContent: 'center',
// 					alignItems: 'center',
// 					padding: 10,
// 					backgroundColor: colors.blackBackground,
// 				}}
// 			>
// 				<ActivityIndicator size="large" color={colors.white} />
// 			</View>
// 		);

// 	return (
// 		<WebView
// 			//   source={{ uri: `${BACKEND_URL}/kyc/${customerId}` }}
// 			onLoad={(syntheticEvent) => {
// 				// console.log('EVENT:', syntheticEvent.nativeEvent);
// 			}}
// 			onError={(syntheticEvent) => alert('An error occurred during Identity verification. Please try again later')}
// 			onHttpError={(syntheticEvent) => {
// 				const { nativeEvent } = syntheticEvent;
// 				console.warn('WebView received error status code: ', nativeEvent.statusCode);
// 			}}
// 			onRenderProcessGone={(syntheticEvent) => {
// 				const { nativeEvent } = syntheticEvent;
// 				console.warn('WebView Crashed: ', nativeEvent.didCrash);
// 			}}
// 			incognito={false}
// 			allowFileAccess={true}
// 			cacheEnabled={false}
// 			mixedContentMode="compatibility"
// 			mediaPlaybackRequiresUserAction={false}
// 			domStorageEnabled={true}
// 			allowsInlineMediaPlayback={true}
// 			allowUniversalAccessFromFileURLs={true}
// 			javaScriptCanOpenWindowsAutomatically={true}
// 			allowsFullscreenVideo={true}
// 			useWebView2={true}
// 		/>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		backgroundColor: colors.blackBackground,
// 	},
// });
