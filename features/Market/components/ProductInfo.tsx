import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import MarketProductDetails from './MarketProductDetails';
export default function ProductInfo({ route, navigation }) {
	const { Company, Name, Price, ShortDescription, longDescription, image, SKU, Category, TAG } = route.params;
	return (
		<ScrollView style={styles.page}>
			<View>
				<Image
					style={styles.coverImage}
					source={{
						uri: image,
					}}
				/>
				<Text style={styles.text1}>
					{Name}
					{'\n'}
					{ShortDescription}
				</Text>
				<Text style={styles.text2}>
					<Text style={{ color: '#C6C6C6' }}>
						<Text style={{ fontWeight: 'bold', fontSize: 20, color: '#94AB13' }}>1,400</Text> LEKE / monthly
					</Text>
				</Text>
				<Text style={styles.text3}>{longDescription}</Text>
				<Pressable style={styles.button}>
					<Text style={styles.text}>Complete Order</Text>
				</Pressable>
				<Text style={styles.text4}>
					SKU: <Text style={{ fontWeight: 'bold' }}>{SKU}</Text>
					{'\n'}
					Category: <Text style={{ fontWeight: 'bold' }}>{Category}</Text>
					{'\n'}
					TAG: <Text style={{ fontWeight: 'bold' }}>{TAG}</Text>
				</Text>
				<Text style={styles.text4}>
					<Text style={{ fontWeight: 'bold', fontSize: 20 }}>You may also like:</Text>
				</Text>
				<View style={styles.bottomView}>
					<MarketProductDetails navigation={route}></MarketProductDetails>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 5,
		paddingHorizontal: 5,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: '#A48D14',
		width: '40%',
		paddingLeft: 10,
		marginLeft: 20,
	},
	whiteLine: {
		borderBottomColor: '#FFFFFF',
		borderBottomWidth: 0.5,
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: '#C6C6C6',
	},
	bottomView: {
		width: '92%',
		marginLeft: '4%',
	},
	page: {
		backgroundColor: '#232426',
		height: 850,
		alignContent: 'center',
	},
	text1: {
		fontSize: 22,
		fontStyle: 'normal',
		// fontFamily: 'Poppins'
		fontWeight: 'bold',
		color: '#C6C6C6',
		padding: 10,
		margin: 10,
	},
	coverImage: {
		width: '92%',
		height: 200,
		marginLeft: '4%',
		marginTop: '5%',
		borderRadius: 5,
	},
	text2: {
		fontSize: 17,
		fontStyle: 'normal',
		color: 'gray',
		padding: 10,
		margin: 10,
		marginTop: -15,
	},
	date: {
		fontSize: 14,
		fontStyle: 'normal',
		color: 'gray',
		paddingLeft: 10,
		marginLeft: 10,
		paddingRight: 10,
		marginRight: 10,
	},
	text3: {
		fontSize: 17,
		fontStyle: 'normal',
		color: '#C6C6C6',
		padding: 10,
		margin: 10,
		marginTop: -5,
		lineHeight: 25,
	},
	text4: {
		fontSize: 17,
		fontStyle: 'normal',
		color: '#C6C6C6',
		padding: 10,
		margin: 10,
		lineHeight: 25,
	},
	image: {
		flex: 2,
		height: 20,
		width: 20,
		borderRadius: 15,
	},
	image2: {
		height: 20,
		width: 20,
		borderRadius: 15,
	},
});
