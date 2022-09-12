import { StyleSheet } from 'react-native';
import { colors } from './colors';

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.blackBackground,

		flex: 1,
	},

	containerView: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 25,
		left: 45,
	},
	containerView1: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},

	image: {
		opacity: 1,
		flex: 1,
		width: '100%',
		backgroundColor: colors.blackBackground,
	},
	logoImage: {
		marginTop: 30,
		marginLeft: 30,
		height: 32,
		width: 28,
	},
	flagImage: {
		marginTop: 30,
		height: 30,
		width: 30,
	},
	arrow: {
		marginTop: 33,
		height: 20,
		width: 10,
	},
	touchButonWhite: {
		backgroundColor: '#FFFFFF',
		borderRadius: 4,
		marginTop: 10,
	},
	touchButonBlack: {
		backgroundColor: '#232426',
		borderRadius: 4,
		marginTop: 10,
	},
	touchButonText: {
		fontSize: 15,
		color: 'black',
		height: 30,
		marginTop: 15,
		textAlign: 'center',
	},
	touchButonTextBuy: {
		fontSize: 15,
		color: 'black',
		height: 25,
		textAlign: 'center',
	},
	touchButonText1: {
		fontSize: 15,
		color: '#FFFFFF',
		height: 30,
		marginTop: 16,
		textAlign: 'center',
	},

	termsPolicyText: {
		color: '#FFFFFF',
		marginTop: 120,
		textAlign: 'center',
		fontSize: 15,
		fontWeight: '400',
		flex: 1,
	},
	termsPolicyTextBold: {
		fontWeight: 'bold',
	},
	login: {
		color: '#FFFFFF',
		fontWeight: 'bold',
		fontSize: 15,
	},
	text: {
		color: '#FFFFFF',
		textAlign: 'center',
		marginBottom: 30,
		marginTop: 20,
		fontWeight: '400',
		fontSize: 15,
	},
	title: {
		color: '#FFFFFF',
		textAlign: 'center',
		marginTop: 30,
		fontWeight: '600',
		lineHeight: 24,
		fontSize: 16,
	},

	title1: {
		color: '#FFFFFF',
		textAlign: 'center',
		marginTop: 20,
		fontWeight: '600',
		lineHeight: 24,
		fontSize: 16,
	},

	btn: {
		borderRadius: 20,
		padding: 20,
		marginTop: 80,
		flex: 1,
	},

	whiteLine: {
		borderBottomColor: '#FFFFFF',
		borderBottomWidth: 0.5,
	},

	textInput: {
		opacity: 1,
		color: '#FFFFFF',
		backgroundColor: '#2C2C2C',
		margin: 20,
		padding: 10,
		borderRadius: 4,
	},

	modalView: {
		margin: 5,
		backgroundColor: '#3E3E3E',
		borderRadius: 7,
		padding: 50,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 7,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#A48D14',
	},
	buttonClose: {
		backgroundColor: '#A48D14',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		marginBottom: 30,
		textAlign: 'center',
		color: 'white',
	},
});

export default styles;
