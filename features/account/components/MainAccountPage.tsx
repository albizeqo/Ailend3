import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { colors } from '../../../styles/colors';
import styles from '../../../styles/styles';

const account = require('../../../assets/accountstatus-icon.png');
const settings = require('../../../assets/settingsicon.png');
const blog = require('../../../assets/blogicon.png');
const support = require('../../../assets/supporticon.png');
const faq = require('../../../assets/faqicon.png');
const arrow = require('../../../assets/arrow-right.png');

export default function MainAccountPage({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.image}>
				<View style={styles.containerView1}>
					<Text style={{ color: 'white', marginTop: 47, fontSize: 19, fontWeight: '400' }}>Lorem Ipsum</Text>
					<Text
						style={{
							color: colors.blackBackground,
							marginTop: 40,
							backgroundColor: colors.gold,
							padding: 10,
							borderRadius: 4,
							width: 90,
							textAlign: 'center',
							fontSize: 16,
							lineHeight: 20,
						}}
					>
						Log out
					</Text>
				</View>

				<View style={{ flex: 1, marginTop: 20 }}>
					<View style={{ padding: 25 }}>
						<TouchableOpacity onPress={() => navigation.navigate('VerifiedSteps')}>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2F2F2F', marginBottom: 20, padding: 15, borderRadius: 7 }}>
								<View style={{ flexDirection: 'row' }}>
									<Image source={account} style={{ height: 21, width: 21 }}></Image>
									<Text style={{ color: 'white', marginLeft: 20 }}>Account Status</Text>
								</View>
								<Image source={arrow} style={{ height: 15, width: 9, marginTop: 3 }}></Image>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2F2F2F', marginBottom: 20, padding: 15, borderRadius: 7 }}>
							<View style={{ flexDirection: 'row' }}>
								<Image source={settings} style={{ maxHeight: 22, maxWidth: 20 }}></Image>
								<Text style={{ color: 'white', marginLeft: 20 }}>Settings</Text>
							</View>
							<TouchableOpacity>
								<Image source={arrow} style={{ height: 15, width: 9, marginTop: 3 }}></Image>
							</TouchableOpacity>
						</View>
						</TouchableOpacity>
						{/* <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#2F2F2F", marginBottom: 20, padding: 15, borderRadius: 7 }}>
                            <View style={{ flexDirection: "row" }}>

                                <Image source={blog} style={{ height: 16.4, width: 17.7 }}></Image>

                                <Text style={{ color: "white", marginLeft: 20 }}>Blog</Text>
                            </View>
                            <TouchableOpacity >
                                <Image source={arrow} style={{ height: 15, width: 9, marginTop: 3 }}></Image>
                            </TouchableOpacity>
                        </View> */}

						<TouchableOpacity onPress={() => navigation.navigate('Chat')}>
							<View style={{ flexDirection: 'row', backgroundColor: '#2F2F2F', marginBottom: 20, padding: 15, borderRadius: 7 }}>
								<Image source={support} style={{ maxHeight: 23, maxWidth: 23 }}></Image>
								<Text style={{ color: 'white', marginLeft: 20 }}>Support</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
							<View style={{ flexDirection: 'row', backgroundColor: '#2F2F2F', marginBottom: 20, padding: 15, borderRadius: 7 }}>
								<Image source={faq} style={{ maxHeight: 22, maxWidth: 20 }}></Image>
								<Text style={{ color: 'white', marginLeft: 20 }}>FAQ</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}
