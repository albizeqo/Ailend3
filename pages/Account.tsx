import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Chat from '../shared/components/Chat';
import ChangeLanguage from '../features/account/components/ChangeLanguage';
import ContinueWithEmail from '../features/account/components/ContinueWithEmail';
import Documents from '../features/account/components/DocumentUpload';
import MainAccountPage from '../features/account/components/MainAccountPage';
import PhoneVerification from '../features/account/components/PhoneVerification';
import PhoneVerificationCode from '../features/account/components/PhoneVerificationCode';
import Settings from '../features/account/components/Settings';
import VerifiedSteps from '../features/account/components/VerifiedSteps';
import VerifyEmail from '../features/account/components/VerifyEmail';
import Kyc from '../features/account/components/Kyc';
import Header from '../shared/components/LoanInformationHeader';
import OnfidoComponent from '../features/account/components/OnfidoComponent';

const Stack = createStackNavigator();
export default function Account() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName={'MainAccountPage'}
		>
			<Stack.Screen name="MainAccountPage" component={MainAccountPage} />
			<Stack.Screen name="Settings" component={Settings} />
			<Stack.Screen name="ChangeLanguage" component={ChangeLanguage} />
			<Stack.Screen name="Kyc" component={Kyc} options={{ headerTitle: () => <Header></Header> }} />
			<Stack.Screen name="VerifiedSteps" component={VerifiedSteps} />
			<Stack.Screen name="ContinueWithEmail" component={ContinueWithEmail} />
			<Stack.Screen name="VerifyEmail" component={VerifyEmail} />
			<Stack.Screen name="PhoneVerification" component={PhoneVerification} />
			<Stack.Screen name="PhoneVerificationCode" component={PhoneVerificationCode} />
			<Stack.Screen name="Onfido" component={OnfidoComponent} />
			<Stack.Screen name="Document" component={Documents} />
			<Stack.Screen name="Chat" component={Chat} />
			{/* <Stack.Screen name="FAQ" component={FAQ} /> */}
		</Stack.Navigator>
	);
}
