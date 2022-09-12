import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, SafeAreaView, Platform, ToastAndroid, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import { YellowButton } from '../../../shared/components/CustomButtons';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { colors } from '../../../styles/colors';
import KycDataModel from '../models/kycDataModel';

export default function Kyc({ navigation }) {
	const arrowdown = require('../../../assets/arrow-down.png');

	function icon() {
		return (
			<View>
				<Image source={arrowdown} style={Dropdownstyles.img}></Image>
			</View>
		);
	}
	const dispatch = useAppDispatch();

	const customerId = useAppSelector((state) => state.accountState.account.customer_id);

	const radioButtonsDataMarket: RadioButtonProps[] = [
		{
			id: '1',
			label: 'Yes',
			value: 'yes',
			color: colors.gold,
			labelStyle: { color: 'white' },
		},
		{
			id: '2',
			label: 'No',
			value: 'no',
			color: colors.gold,
			labelStyle: { color: 'white' },
		},
	];

	const radioButtonsDataBoa: RadioButtonProps[] = [
		{
			id: '1',
			label: 'Yes',
			value: 'yes',
			color: colors.gold,
			labelStyle: { color: 'white' },
		},
		{
			id: '2',
			label: 'No',
			value: 'no',
			color: colors.gold,
			labelStyle: { color: 'white' },
		},
	];

	let [isSelectedBoa, setIsSelectedBoa] = useState(false);
	let [isSelectedMarket, setIsSelectedMarket] = useState(false);

	const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(radioButtonsDataMarket);
	function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
		setRadioButtons(radioButtonsArray);

		var selectMarket = radioButtonsArray.map((x) => x.selected === true);
		isSelectedMarket = selectMarket[0];
		setIsSelectedMarket(isSelectedMarket);
	}

	const [radioButton, setRadioButton] = useState<RadioButtonProps[]>(radioButtonsDataBoa);
	function onPressRadioButtonBoa(radioButtonsArrayBoa: RadioButtonProps[]) {
		setRadioButton(radioButtonsArrayBoa);
		var selectBoa = radioButtonsArrayBoa.map((x) => x.selected === true);
		isSelectedBoa = selectBoa[0];
		setIsSelectedBoa(isSelectedBoa);
	}

	//   TODO: Refactor countries in enviroment file
	const countries = ['Albania', 'Egypt', 'Canada', 'Australia', 'Ireland'];

	const cities = ['Tirana', 'Durresi', 'Vlora', 'Elbasani', 'Korca'];

	const jobs = ['NenPunes', 'Pronar', 'BashkePronar', 'Specialist'];

	const education = ['Bachelor', 'Master', 'Gjimnaz'];

	const status = ['I/E Martuar', 'Beqar', 'I/E ve'];

	const [data, setData] = useState({
		customerId: '',
		firstName: '',
		lastName: '',
		fatherName: '',
		personalNumber: '',
		cityOfResidence: '',
		gender: '',
		countryOfBirth: '',
		cityOfBirth: '',
		nationality: '',
		jobPosition: '',
		taxNumber: '',
		residenceStatus: '',
		zip: '',
		fullAddress: '',
		employmentStatus: '',
		employmentType: '',
		levelOfEducation: '',
		maritialStatus: '',
		numberOfDependants: '',
		apartmentAddress: '',
		countryOfResidence: '',
		taxPayerCountry: '',
		identificationDocument: '',
		sourceOfFunds: '',
	});

	const [date, setDate] = useState(new Date());
	const [mode, setMode] = useState('');
	const [show, setShow] = useState(false);

	const onChange = (event: any, selectedDate: any) => {
		const currentDate = selectedDate;
		setShow(false);
		setDate(currentDate);
	};

	const showMode = (currentMode: React.SetStateAction<string>) => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode('date');
	};

	let fullKyc: KycDataModel = {
		apartmentAddress: data.apartmentAddress,
		atJobSince: date.toDateString(),
		boaConsent: isSelectedBoa,
		cityOfBirth: data.cityOfBirth,
		cityOfResidence: data.cityOfResidence,
		countryOfBirth: data.countryOfBirth,
		countryOfResidence: data.countryOfResidence,
		customerId: customerId,
		dateOfBirth: date.toDateString(),
		employmentStatus: data.employmentStatus,
		employmentType: data.employmentType,
		fatherName: data.fatherName,
		firstName: data.firstName,
		fullAddress: data.fullAddress,
		gender: 'Male',
		identificationDocument: data.identificationDocument,
		jobPosition: data.jobPosition,
		lastName: data.lastName,
		levelOfEducation: data.levelOfEducation,
		maritialStatus: data.maritialStatus,
		marketConsent: isSelectedMarket,
		nationality: data.nationality,
		numberOfDependants: data.numberOfDependants,
		personalNumber: data.personalNumber,
		residenceStatus: 'status',
		sourceOfFunds: data.sourceOfFunds,
		taxNumber: data.taxNumber,
		taxPayerCountry: data.taxPayerCountry,
		zip: data.zip,
	};

	//   const sendKycData = async () => {
	//     if (!data.firstName || !data.lastName) return alert('Firstname and lastname is requred');
	//     const response = await kyc(fullKyc);
	//     if (response?.succeeded) {
	//       Platform.OS === 'android' ? ToastAndroid.show('KYC completed with success.', ToastAndroid.SHORT) : alert('KYC completed with success.');
	//       dispatch(setCustomerStatus('KYC_SUBMITED'));
	//       props.navigation.navigate('AccountVerification');
	//       return;
	//     }
	//     Platform.OS === 'android' ? ToastAndroid.show('Problem submiting KYC. Please try again', ToastAndroid.SHORT) : alert('Problem submiting KYC. Please try again');
	//     props.navigation.navigate('AccountVerification');
	//   };

	return (
		<SafeAreaView style={{ backgroundColor: colors.blackBackground, paddingTop: 25 }}>
			<ScrollView style={{ marginBottom: 80 }}>
				<View style={TextInputViewinlinestyles.view}>
					<TextInput
						defaultValue={data.firstName}
						onChangeText={(text1: any) => setData({ ...data, firstName: text1 })}
						keyboardType={'numbers-and-punctuation'}
						placeholder={'Name'}
						placeholderTextColor={'white'}
						secureTextEntry={false}
						style={TextInputInlinestyles.textInput}
						editable={true}
						value={undefined}
					></TextInput>
				</View>
				<View style={TextInputViewinlinestyles.view}>
					<TextInput
						keyboardType={'numbers-and-punctuation'}
						placeholder={'Last Name'}
						placeholderTextColor={'white'}
						secureTextEntry={false}
						style={TextInputInlinestyles.textInput}
						editable={true}
						value={undefined}
						defaultValue={data.lastName}
					></TextInput>
				</View>
				<View style={TextInputViewinlinestyles.view}>
					<TextInput
						defaultValue={data.fatherName}
						onChangeText={(text1: any) => setData({ ...data, fatherName: text1 })}
						keyboardType={'numbers-and-punctuation'}
						placeholder={'Father`s Name'}
						placeholderTextColor={'white'}
						secureTextEntry={false}
						style={TextInputInlinestyles.textInput}
						editable={true}
						value={undefined}
					></TextInput>
				</View>

				<View style={TextInputViewinlinestyles.view}>
					{show && <DateTimePicker testID="dateTimePicker" value={date} is24Hour={true} onChange={onChange} />}

					<TextInput
						open={() => showDatepicker()}
						defaultValue={''}
						value={date.toLocaleDateString()}
						style={TextInputInlinestyles.textInput}
						onChangeText={(data1: string) => setDate(new Date(data1))}
						keyboardType={'numbers-and-punctuation'}
						placeholder={'Date of birth'}
						placeholderTextColor={'white'}
						secureTextEntry={false}
						styles={TextInputInlinestyles.textInput}
						editable={true}
					></TextInput>
				</View>

				<View style={TextInputViewinlinestyles.view}>
					<TextInput
						defaultValue={data.personalNumber}
						onChangeText={(text1: any) => setData({ ...data, personalNumber: text1 })}
						keyboardType={'numbers-and-punctuation'}
						placeholder={'Personal number'}
						placeholderTextColor={'white'}
						secureTextEntry={false}
						style={TextInputInlinestyles.textInput}
						editable={true}
						value={undefined}
					></TextInput>
				</View>
				<View style={TextInputViewinlinestyles.view}>
					<TextInput
						defaultValue={data.apartmentAddress}
						onChangeText={(text1: any) => setData({ ...data, apartmentAddress: text1 })}
						keyboardType={'numbers-and-punctuation'}
						placeholder={'Apartment Address'}
						placeholderTextColor={'white'}
						secureTextEntry={false}
						style={TextInputInlinestyles.textInput}
						editable={true}
						value={undefined}
					></TextInput>
				</View>
				<View style={Dropdownstyles.view}>
					<View style={Dropdownstyles.view2}>
						<SelectDropdown
							renderDropdownIcon={icon}
							defaultButtonText="Country of Residence"
							data={countries}
							rowStyle={{ backgroundColor: '#2C2C2C' }}
							buttonTextStyle={Dropdownstyles.buttonTextStyle}
							buttonStyle={Dropdownstyles.buttonStyle}
							rowTextStyle={{ color: 'white' }}
							onSelect={(selectedItem: any) => {
								setData({ ...data, countryOfResidence: selectedItem });
							}}
							buttonTextAfterSelection={(selectedItem: any, index: any) => {
								// text represented after item is selected
								// if data array is an array of objects then return selectedItem.property to render after item is selected
								return selectedItem;
							}}
							rowTextForSelection={(item: any, index: any) => {
								// text represented for each item in dropdown
								// if data array is an array of objects then return item.property to represent item in dropdown
								return item;
							}}
						/>
					</View>
				</View>

				<View style={Dropdownstyles.view}>
					<View style={Dropdownstyles.view2}>
						<SelectDropdown
							renderDropdownIcon={icon}
							defaultButtonText="City of Residence"
							data={cities}
							rowStyle={{ backgroundColor: '#2C2C2C' }}
							buttonTextStyle={Dropdownstyles.buttonTextStyle}
							buttonStyle={Dropdownstyles.buttonStyle}
							rowTextStyle={{ color: 'white' }}
							onSelect={(selectedItem) => {
								setData({ ...data, cityOfResidence: selectedItem });
							}}
							buttonTextAfterSelection={(selectedItem: any) => {
								// text represented after item is selected
								// if data array is an array of objects then return selectedItem.property to render after item is selected
								return selectedItem;
							}}
							rowTextForSelection={(item: any, index: any) => {
								// text represented for each item in dropdown
								// if data array is an array of objects then return item.property to represent item in dropdown
								return item;
							}}
						/>
					</View>
				</View>
				<View style={Dropdownstyles.view}>
					<View style={{ backgroundColor: '#2C2C2C', borderRadius: 4 }}>
						<SelectDropdown
							renderDropdownIcon={icon}
							defaultButtonText="Birth Country"
							data={countries}
							rowStyle={{ backgroundColor: '#2C2C2C' }}
							buttonTextStyle={Dropdownstyles.buttonTextStyle}
							buttonStyle={Dropdownstyles.buttonStyle}
							rowTextStyle={{ color: 'white' }}
							onSelect={(selectedItem) => {
								setData({ ...data, countryOfBirth: selectedItem });
							}}
							buttonTextAfterSelection={(selectedItem: any, index: any) => {
								// text represented after item is selected
								// if data array is an array of objects then return selectedItem.property to render after item is selected
								return selectedItem;
							}}
							rowTextForSelection={(item: any, index: any) => {
								// text represented for each item in dropdown
								// if data array is an array of objects then return item.property to represent item in dropdown
								return item;
							}}
						/>
					</View>
				</View>

				<View style={Dropdownstyles.view}>
					<View style={Dropdownstyles.view2}>
						<SelectDropdown
							renderDropdownIcon={icon}
							defaultButtonText="Birth City"
							data={cities}
							rowStyle={{ backgroundColor: '#2C2C2C' }}
							buttonTextStyle={Dropdownstyles.buttonTextStyle}
							buttonStyle={Dropdownstyles.buttonStyle}
							rowTextStyle={{ color: 'white' }}
							onSelect={(selectedItem) => {
								setData({ ...data, cityOfBirth: selectedItem });
							}}
							buttonTextAfterSelection={(selectedItem: any) => {
								// text represented after item is selected
								// if data array is an array of objects then return selectedItem.property to render after item is selected
								return selectedItem;
							}}
							rowTextForSelection={(item: any) => {
								// text represented for each item in dropdown
								// if data array is an array of objects then return item.property to represent item in dropdown
								return item;
							}}
						/>
					</View>
				</View>
				<View style={Dropdownstyles.view}>
					<View style={Dropdownstyles.view2}>
						<SelectDropdown
							renderDropdownIcon={icon}
							defaultButtonText="Tax Payer Country"
							data={countries}
							rowStyle={{ backgroundColor: '#2C2C2C' }}
							buttonTextStyle={Dropdownstyles.buttonTextStyle}
							buttonStyle={Dropdownstyles.buttonStyle}
							rowTextStyle={{ color: 'white' }}
							onSelect={(selectedItem) => {
								setData({ ...data, taxPayerCountry: selectedItem });
							}}
							buttonTextAfterSelection={(selectedItem: any, index: any) => {
								// text represented after item is selected
								// if data array is an array of objects then return selectedItem.property to render after item is selected
								return selectedItem;
							}}
							rowTextForSelection={(item: any, index: any) => {
								// text represented for each item in dropdown
								// if data array is an array of objects then return item.property to represent item in dropdown
								return item;
							}}
						/>
					</View>
				</View>

				<View style={TextInputViewinlinestyles.view}>
					<TextInput
						defaultValue={data.taxNumber}
						onChangeText={(text1: any) => setData({ ...data, taxNumber: text1 })}
						keyboardType={'numbers-and-punctuation'}
						placeholder={'Tax number'}
						placeholderTextColor={'white'}
						secureTextEntry={false}
						style={TextInputInlinestyles.textInput}
						editable={true}
						value={undefined}
					></TextInput>
				</View>
				<View style={TextInputViewinlinestyles.view}>
					<TextInput
						defaultValue={data.zip}
						onChangeText={(text1: any) => setData({ ...data, zip: text1 })}
						keyboardType={'numbers-and-punctuation'}
						placeholder={'ZIP'}
						placeholderTextColor={'white'}
						secureTextEntry={false}
						style={TextInputInlinestyles.textInput}
						editable={true}
						value={undefined}
					></TextInput>
				</View>
				<View style={Dropdownstyles.view}>
					<View style={Dropdownstyles.view2}>
						<SelectDropdown
							renderDropdownIcon={icon}
							defaultButtonText="Source of Funds"
							data={countries}
							rowStyle={{ backgroundColor: '#2C2C2C' }}
							buttonTextStyle={Dropdownstyles.buttonTextStyle}
							buttonStyle={Dropdownstyles.buttonStyle}
							rowTextStyle={{ color: 'white' }}
							onSelect={(selectedItem) => {
								setData({ ...data, sourceOfFunds: selectedItem });
							}}
							buttonTextAfterSelection={(selectedItem: any, index: any) => {
								// text represented after item is selected
								// if data array is an array of objects then return selectedItem.property to render after item is selected
								return selectedItem;
							}}
							rowTextForSelection={(item: any, index: any) => {
								// text represented for each item in dropdown
								// if data array is an array of objects then return item.property to represent item in dropdown
								return item;
							}}
						/>
					</View>
				</View>

				<View style={Dropdownstyles.view}>
					<View style={Dropdownstyles.view2}>
						<SelectDropdown
							renderDropdownIcon={icon}
							defaultButtonText="Identification Document"
							data={countries}
							rowStyle={{ backgroundColor: '#2C2C2C' }}
							buttonTextStyle={Dropdownstyles.buttonTextStyle}
							buttonStyle={Dropdownstyles.buttonStyle}
							rowTextStyle={{ color: 'white' }}
							onSelect={(selectedItem) => {
								setData({ ...data, identificationDocument: selectedItem });
							}}
							buttonTextAfterSelection={(selectedItem: any, index: any) => {
								// text represented after item is selected
								// if data array is an array of objects then return selectedItem.property to render after item is selected
								return selectedItem;
							}}
							rowTextForSelection={(item: any, index: any) => {
								// text represented for each item in dropdown
								// if data array is an array of objects then return item.property to represent item in dropdown
								return item;
							}}
						/>
					</View>
				</View>
				<View style={TextInputViewinlinestyles.view}>
					<TextInput
						defaultValue={data.fullAddress}
						onChangeText={(text1: any) => setData({ ...data, fullAddress: text1 })}
						keyboardType={'numbers-and-punctuation'}
						placeholder={'Full Address'}
						placeholderTextColor={'white'}
						secureTextEntry={false}
						style={TextInputInlinestyles.textInput}
						editable={true}
						value={undefined}
					></TextInput>
				</View>
				<View style={Dropdownstyles.view}>
					<View style={Dropdownstyles.view2}>
						<SelectDropdown
							renderDropdownIcon={icon}
							defaultButtonText="Nationality"
							data={countries}
							rowStyle={{ backgroundColor: '#2C2C2C' }}
							buttonTextStyle={Dropdownstyles.buttonTextStyle}
							buttonStyle={Dropdownstyles.buttonStyle}
							rowTextStyle={{ color: 'white' }}
							onSelect={(selectedItem) => {
								setData({ ...data, nationality: selectedItem });
							}}
							buttonTextAfterSelection={(selectedItem: any, index: any) => {
								// text represented after item is selected
								// if data array is an array of objects then return selectedItem.property to render after item is selected
								return selectedItem;
							}}
							rowTextForSelection={(item: any, index: any) => {
								// text represented for each item in dropdown
								// if data array is an array of objects then return item.property to represent item in dropdown
								return item;
							}}
						/>
					</View>
				</View>

				<View style={Dropdownstyles.view}>
					<View style={Dropdownstyles.view2}>
						<SelectDropdown
							renderDropdownIcon={icon}
							defaultButtonText="Job Position"
							data={jobs}
							rowStyle={{ backgroundColor: '#2C2C2C' }}
							buttonTextStyle={Dropdownstyles.buttonTextStyle}
							buttonStyle={Dropdownstyles.buttonStyle}
							rowTextStyle={{ color: 'white' }}
							onSelect={(selectedItem) => {
								setData({ ...data, jobPosition: selectedItem });
							}}
							buttonTextAfterSelection={(selectedItem: any, index: any) => {
								// text represented after item is selected
								// if data array is an array of objects then return selectedItem.property to render after item is selected
								return selectedItem;
							}}
							rowTextForSelection={(item: any, index: any) => {
								// text represented for each item in dropdown
								// if data array is an array of objects then return item.property to represent item in dropdown
								return item;
							}}
						/>
					</View>
				</View>
				<View style={Dropdownstyles.view}>
					<View style={Dropdownstyles.view2}>
						<SelectDropdown
							renderDropdownIcon={icon}
							defaultButtonText="Employment Status"
							data={jobs}
							rowStyle={{ backgroundColor: '#2C2C2C' }}
							buttonTextStyle={Dropdownstyles.buttonTextStyle}
							buttonStyle={Dropdownstyles.buttonStyle}
							rowTextStyle={{ color: 'white' }}
							onSelect={(selectedItem) => {
								setData({ ...data, employmentStatus: selectedItem });
							}}
							buttonTextAfterSelection={(selectedItem: any, index: any) => {
								// text represented after item is selected
								// if data array is an array of objects then return selectedItem.property to render after item is selected
								return selectedItem;
							}}
							rowTextForSelection={(item: any, index: any) => {
								// text represented for each item in dropdown
								// if data array is an array of objects then return item.property to represent item in dropdown
								return item;
							}}
						/>
					</View>
				</View>

				<View style={Dropdownstyles.view}>
					<View style={Dropdownstyles.view2}>
						<SelectDropdown
							renderDropdownIcon={icon}
							defaultButtonText="Employment Type"
							data={jobs}
							rowStyle={{ backgroundColor: '#2C2C2C' }}
							buttonTextStyle={Dropdownstyles.buttonTextStyle}
							buttonStyle={Dropdownstyles.buttonStyle}
							rowTextStyle={{ color: 'white' }}
							onSelect={(selectedItem) => {
								setData({ ...data, employmentType: selectedItem });
							}}
							buttonTextAfterSelection={(selectedItem: any, index: any) => {
								// text represented after item is selected
								// if data array is an array of objects then return selectedItem.property to render after item is selected
								return selectedItem;
							}}
							rowTextForSelection={(item: any, index: any) => {
								// text represented for each item in dropdown
								// if data array is an array of objects then return item.property to represent item in dropdown
								return item;
							}}
						/>
					</View>
				</View>

				<View style={Dropdownstyles.view}>
					<View style={Dropdownstyles.view2}>
						<SelectDropdown
							renderDropdownIcon={icon}
							defaultButtonText="Level of Education"
							data={education}
							rowStyle={{ backgroundColor: '#2C2C2C' }}
							buttonTextStyle={Dropdownstyles.buttonTextStyle}
							buttonStyle={Dropdownstyles.buttonStyle}
							rowTextStyle={{ color: 'white' }}
							onSelect={(selectedItem) => {
								setData({ ...data, levelOfEducation: selectedItem });
							}}
							buttonTextAfterSelection={(selectedItem: any, index: any) => {
								// text represented after item is selected
								// if data array is an array of objects then return selectedItem.property to render after item is selected
								return selectedItem;
							}}
							rowTextForSelection={(item: any, index: any) => {
								// text represented for each item in dropdown
								// if data array is an array of objects then return item.property to represent item in dropdown
								return item;
							}}
						/>
					</View>
				</View>
				<View style={Dropdownstyles.view}>
					<View style={Dropdownstyles.view2}>
						<SelectDropdown
							renderDropdownIcon={icon}
							defaultButtonText="Martial Status"
							data={status}
							rowStyle={{ backgroundColor: '#2C2C2C' }}
							buttonTextStyle={Dropdownstyles.buttonTextStyle}
							buttonStyle={Dropdownstyles.buttonStyle}
							rowTextStyle={{ color: 'white' }}
							onSelect={(selectedItem) => {
								setData({ ...data, maritialStatus: selectedItem });
							}}
							buttonTextAfterSelection={(selectedItem: any, index: any) => {
								// text represented after item is selected
								// if data array is an array of objects then return selectedItem.property to render after item is selected
								return selectedItem;
							}}
							rowTextForSelection={(item: any, index: any) => {
								// text represented for each item in dropdown
								// if data array is an array of objects then return item.property to represent item in dropdown
								return item;
							}}
						/>
					</View>
				</View>
				<View style={TextInputViewinlinestyles.view}>
					<TextInput
						defaultValue={data.numberOfDependants}
						onChangeText={(text1: any) => setData({ ...data, numberOfDependants: text1 })}
						keyboardType={'numbers-and-punctuation'}
						placeholder={'Number of dependants'}
						placeholderTextColor={'white'}
						secureTextEntry={false}
						style={TextInputInlinestyles.textInput}
						editable={true}
						value={undefined}
					></TextInput>
				</View>

				<View style={{ flexDirection: 'row' }}>
					<View style={Checkinlinestyles.view}>
						<View>
							<Text style={Checkinlinestyles.text}>BOA Consent</Text>
							<View style={Checkinlinestyles.view2}>
								<RadioGroup radioButtons={radioButton} onPress={onPressRadioButtonBoa} layout="row" />
							</View>
						</View>
					</View>

					<View style={Checkinlinestyles.view}>
						<View>
							<Text style={Checkinlinestyles.text}>Market Consent</Text>
							<View style={Checkinlinestyles.view2}>
								<RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} layout="row" />
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
			<View style={{ paddingHorizontal: 10, position: 'absolute', bottom: 0, marginVertical: 20, flex: 1, width: '100%' }}>
				<YellowButton text={'Continue'} onPress={() => navigation.navigate('VerifiedSteps')}></YellowButton>
			</View>
		</SafeAreaView>
	);
}

const TextInputInlinestyles = StyleSheet.create({
	view: {
		padding: 25,
	},

	textInput: {
		opacity: 1,
		color: '#FFFFFF',
		backgroundColor: '#2C2C2C',
		height: 55,

		borderWidth: 1,
		borderColor: '#2C2C2C',
		padding: 10,
		borderRadius: 4,
	},
});

const Dropdownstyles = StyleSheet.create({
	img: {
		height: 9,
		width: 16,
		marginRight: 20,
	},
	view: {
		padding: 12,
	},

	view2: {
		backgroundColor: '#2C2C2C',
		borderRadius: 4,
	},
	buttonTextStyle: {
		color: 'white',
		backgroundColor: '#2C2C2C',
		fontSize: 14,
		textAlign: 'left',
	},
	buttonStyle: { width: '100%', backgroundColor: '#2C2C2C' },
});

const Checkinlinestyles = StyleSheet.create({
	view: {
		padding: 14,
	},

	text: {
		color: 'white',
		marginLeft: 12,
	},
	view2: {
		flexDirection: 'row',
		marginTop: 20,
	},
});

const TextInputViewinlinestyles = StyleSheet.create({
	view: {
		padding: 12,
	},

	textInput: {
		opacity: 1,
		color: '#FFFFFF',
		backgroundColor: '#2C2C2C',
		height: 55,

		borderWidth: 1,
		borderColor: '#2C2C2C',
		padding: 10,
		borderRadius: 4,
	},
});
