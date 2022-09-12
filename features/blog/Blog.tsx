/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

const house = require('../../assets/house.png');
const house2 = require('../../assets/house2.png');
// const arrow1 = require('../../assets/arrow.png');
const logo = require('../../assets/ailendlogo.png');
const facebook = require('../../assets/facebook.png');
const insta = require('../../assets/insta.png');
const linkedin = require('../../assets/linkedin.png');

export default function Blog() {
	return (
		<ImageBackground source={house} style={inlinestyles.imgBck}>
			<ScrollView>
				
					<View style={{ marginTop: 90 }}>
						<View style={{ padding: 20 }}>
							<Text style={inlinestyles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
						</View>
						<View style={inlinestyles.viewTeamAilend}>
							<Image
								source={logo}
								style={{
									height: 32,
									width: 28,
								}}
							></Image>
							<Text style={inlinestyles.textTeamAilend}>Team AiLend</Text>
						</View>
					</View>

					<View style={{ marginTop: 30 }}>
						<View>
							<Text style={inlinestyles.shareText}>Share</Text>
						</View>
						<View style={inlinestyles.viewIcons}>
							<Image source={facebook} style={{ width: 30, height: 30 }}></Image>
							<Image source={insta} style={{ width: 30, height: 30, marginLeft: 10 }}></Image>
							<Image source={linkedin} style={{ width: 30, height: 30, marginLeft: 10 }}></Image>
						</View>
					</View>
			

				<View style={{ backgroundColor: '#202123' }}>
					<View>
						<Text style={{ color: 'white', padding: 20 }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus ac tincidunt posuere laoreet adipiscing tempus, et sit nec. Erat vel nisl nunc, ipsum. Integer facilisi
							nulla mauris quam sagittis, cursus. Elit mauris gravida lorem quisque pretium metus. Et rutrum cursus nulla consectetur erat nisl egestas. Placerat ultrices sed nunc, velit
							bibendum. Praesent eget aliquam egestas nulla in. Ut gravida integer luctus eu, pellentesque urna. At aliquet amet ipsum et, diam nisi, quam. Augue justo dui dui in
							blandit. Consectetur cursus vitae quam curabitur risus dui morbi. Enim quam lacus, velit ut faucibus ornare. Sit lacus mattis pharetra amet, eu ut etiam aenean. Eleifend
							proin dignissim malesuada dictumst egestas tempor, risus fringilla. Malesuada vel aliquam amet, non. Ut enim id malesuada venenatis et. Facilisi egestas odio vel nulla eget
							varius. Risus dui velit, bibendum risus eu tincidunt. Enim molestie amet, diam lacinia fermentum. Tellus at commodo arcu tincidunt vitae. Senectus tempor malesuada tellus
							vulputate. Erat faucibus amet netus a vel est. Leo tortor orci, vitae diam. Varius tempus, duis tincidunt vitae mauris faucibus lectus velit. Lorem non, semper fames vel
							urna, diam. Mollis placerat egestas aliquet tincidunt blandit condimentum est massa gravida. Eu lorem et nibh amet. Condimentum ullamcorper vestibulum, laoreet massa ornare
							habitasse. Viverra turpis vel id consectetur. Pellentesque nunc, quis sit urna leo diam. Condimentum sollicitudin malesuada mollis eget ornare dui egestas. Consequat, lacus
							in pellentesque leo mattis aliquam commodo lacinia. At interdum id at interdum vitae. Vitae ante sodales tortor ac. Quam nisl nunc nec neque ut nunc, massa, semper risus.
							In nam arcu etiam sem nisl, adipiscing. Vitae, sed gravida nisl sed ac et tempor accumsan augue. Magnis vitae urna risus commodo leo. Interdum purus viverra blandit lacus,
							praesent.
						</Text>
					</View>
					<View style={{ padding: 20, flexDirection: 'row' }}>
						<Text style={{ color: 'white' }}>Categories: </Text>
						<Text style={{ color: 'white' }}>#Loremipsum</Text>
					</View>
					<View style={{ padding: 20 }}>
						<TouchableOpacity style={inlinestyles.btn}>
							<Text style={inlinestyles.btnText}>
								<Text style={{ fontWeight: 'bold' }}>Get a house loan</Text>
							</Text>
						</TouchableOpacity>
						<View>
							<View style={{ marginTop: 100 }}>
								<Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Continue Reading</Text>
								<View style={{ marginTop: 40 }}>
									<Image source={house2} style={{ borderRadius: 20, width: '100%', height: 200 }}></Image>
								</View>
								<Text style={inlinestyles.tagText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
								<Text style={inlinestyles.tagText1}>#Loremipsum</Text>
								<Text style={{ color: 'white', marginTop: 20 }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit duis erat morbi vitae. Amet platea interdum lectus in. Faucibus ut elementum ultrices arcu quis.
									Tristique purus feugiat suspendisse volutpat at elementum luctus nunc.
								</Text>
							</View>
						</View>
						<View style={{ flexDirection: 'row', marginTop: 40 }}>
							<Image
								source={logo}
								style={{
									height: 24,
									width: 21,
								}}
							></Image>
							<Text style={inlinestyles.textTeamAilend1}>Team AiLend</Text>
						</View>
						<TouchableOpacity style={inlinestyles.btn1}>
							<Text style={inlinestyles.btnText}>
								<Text style={{ fontFamily: 'Poppins' }}>Load more</Text>
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</ImageBackground>
	);
}

const inlinestyles = StyleSheet.create({
	imgBck: {
		opacity: 1.2,
		flex: 1,
		backgroundColor: '#202123',
	},
	text: {
		color: 'white',
		marginTop: 33,
		marginRight: 100,
		// fontWeight: "800",
		fontSize: 18,
		// fontFamily: 'Poppins'
	},
	title: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
		// fontFamily: 'Poppins'
	},

	viewTeamAilend: {
		alignSelf: 'center',
		flexDirection: 'row',
		marginTop: 80,
	},
	textTeamAilend: {
		color: 'white',
		marginLeft: 20,
		fontSize: 17,
		fontWeight: '500',
		// fontFamily: 'Poppins'
	},
	textTeamAilend1: {
		color: 'white',
		marginLeft: 20,
		fontSize: 13,
		fontWeight: '500',
	},
	shareText: {
		color: 'white',
		fontSize: 18,
		fontWeight: '500',
		textAlign: 'center',
		// fontFamily: 'Poppins'
	},

	viewIcons: {
		flexDirection: 'row',
		alignSelf: 'center',
		marginTop: 20,
	},

	btnText: {
		fontSize: 15,
		color: 'white',
		height: 30,
		marginTop: 15,
		textAlign: 'center',
		// fontFamily: 'Poppins'
	},
	btn: {
		backgroundColor: '#A48D14',
		borderRadius: 4,
		marginTop: 10,
	},
	btn1: {
		backgroundColor: '#A48D14',
		borderRadius: 4,
		marginTop: 40,
	},
	tagText: { color: 'white', marginTop: 20, fontSize: 18 },
	tagText1: { color: 'white', backgroundColor: '#2F2F2F', width: '35%', textAlign: 'center', marginTop: 15 },
});
