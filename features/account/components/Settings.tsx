import React, { useState } from 'react';
import { Image, TouchableOpacity, Text, View, ScrollView, Switch } from 'react-native';
import { colors } from '../../../styles/colors';
import styles from '../../../styles/styles';

const account = require('../../../assets/accountstatus-icon.png');
const bell = require('../../../assets/bell.png');
const language = require('../../../assets/language.png');
const passwordChange = require('../../../assets/passwordchange.png');
const timezone = require('../../../assets/timezone.png');
const arrow = require('../../../assets/arrow-right.png');

export default function MainAccountPage({ navigation }) {
    const currentLang = "English"
    const currentTimezone = "Zagreb"
    const accountVerified = false
    const fingerprintActive = false
    const [darkTheme, setDarkTheme] = useState(false)
	return (
		<ScrollView style={styles.container}>
			<View style={styles.image}>
				<View style={styles.containerView1}>
					<Text style={{ color: 'white', marginTop: 47, fontSize: 19, fontWeight: '400' }}>Settings</Text>
				</View>

				<View style={{ flex: 1, marginTop: 20 }}>
					<View style={{ padding: 25 }}>
                    
                    {accountVerified ? "" : 
                    <TouchableOpacity style={{marginBottom:15}} onPress={() => navigation.navigate('VerifiedSteps')}>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2F2F2F', marginBottom: 20, padding: 15, borderRadius: 7 }}>
								<View style={{ flexDirection: 'row' }}>
									<Image source={account} style={{ height: 21, width: 21 }}></Image>
									<Text style={{ color: 'white', marginLeft: 20 }}>Account Verification</Text>
								</View>
								<Image source={arrow} style={{ height: 15, width: 9, marginTop: 3 }}></Image>
							</View>
						</TouchableOpacity>
                        }
						<TouchableOpacity onPress={() => navigation.navigate('ChangeLanguage')}>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2F2F2F', marginBottom: 20, padding: 15, borderRadius: 7 }}>
								<View style={{ flexDirection: 'row' }}>
									<Image source={language} style={{ height: 21, width: 21 }}></Image>
									<Text style={{ color: 'white', marginLeft: 20 }}>Language</Text>
								</View>
								<View style={{ flexDirection: 'row' }}>
                                <Text style={{marginRight:20, fontWeight:"bold", color:colors.gold}}>{currentLang}</Text>
								<Image source={arrow} style={{ height: 15, width: 9, marginTop: 3 }}></Image>
                                </View>
							</View>
						</TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => navigation.navigate('ChangeLanguage')}>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2F2F2F', marginBottom: 20, padding: 15, borderRadius: 7 }}>
								<View style={{ flexDirection: 'row' }}>
									<Image source={timezone} style={{ height: 21, width: 21 }}></Image>
									<Text style={{ color: 'white', marginLeft: 20 }}>Timezone</Text>
								</View>
								<View style={{ flexDirection: 'row' }}>
                                <Text style={{marginRight:20, fontWeight:"bold", color:colors.gold}}>{currentTimezone}</Text>
								<Image source={arrow} style={{ height: 15, width: 9, marginTop: 3 }}></Image>
                                </View>
							</View>
						</TouchableOpacity>
                        

							<View style={{ flexDirection: 'row', position:"relative", justifyContent: 'space-between', backgroundColor: '#2F2F2F', marginBottom: 20, padding: 15, borderRadius: 7 }}>
								<View style={{ flexDirection: 'row' }}>
									<Image source={language} style={{ height: 21, width: 21 }}></Image>
									<Text style={{ color: 'white', marginLeft: 20 }}>Dark theme</Text>
								</View>
								<View style={{position:"absolute", top:3, right:10}}>
                                <Switch thumbColor={"#fff"} trackColor={{true:colors.gold}} value={darkTheme} onChange={() => setDarkTheme(!darkTheme)}/>
                                </View>
							</View>

						<TouchableOpacity onPress={() => navigation.navigate('timezone')}>
							<View style={{ flexDirection: 'row', backgroundColor: '#2F2F2F', marginBottom: 20, padding: 15, borderRadius: 7 }}>
								<Image source={timezone} style={{ maxHeight: 22, maxWidth: 20 }}></Image>
								<Text style={{ color: 'white', marginLeft: 20 }}>Watchlist style</Text>
							</View>
						</TouchableOpacity>

                        <TouchableOpacity style={{marginTop:10}} onPress={() => navigation.navigate('timezone')}>
							<View style={{ flexDirection: 'row', backgroundColor: '#2F2F2F', marginBottom: 20, padding: 15, borderRadius: 7 }}>
								<Image source={bell} style={{ maxHeight: 22, maxWidth: 20 }}></Image>
								<Text style={{ color: 'white', marginLeft: 20 }}>Notifications</Text>
							</View>
						</TouchableOpacity>

                            <View style={{ flexDirection: 'row',marginTop:10, marginBottom:30,  position:"relative", justifyContent: 'space-between', backgroundColor: '#2F2F2F', padding: 15, borderRadius: 7 }}>
								<View style={{ flexDirection: 'row' }}>
									<Image source={language} style={{ height: 21, width: 21 }}></Image>
									<Text style={{ color: 'white', marginLeft: 20 }}>Two-Factor Authentication</Text>
								</View>
								<View style={{position:"absolute", top:3, right:10}}>
                                <Switch thumbColor={"#fff"} trackColor={{true:colors.gold}} value={darkTheme} onChange={() => setDarkTheme(!darkTheme)}/>
                                </View>
							</View>

                           
                            <TouchableOpacity onPress={() => navigation.navigate('ChangeLanguage')}>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2F2F2F', marginBottom: 20, padding: 15, borderRadius: 7 }}>
								<View style={{ flexDirection: 'row' }}>
									<Image source={timezone} style={{ height: 21, width: 21 }}></Image>
									<Text style={{ color: 'white', marginLeft: 20 }}>Fingerprint and PIN</Text>
								</View>
								<View style={{ flexDirection: 'row' }}>
                                <Text style={{marginRight:20, fontWeight:"bold", color:colors.gold}}>{fingerprintActive ? "Active" : "Not active"}</Text>
								<Image source={arrow} style={{ height: 15, width: 9, marginTop: 3 }}></Image>
                                </View>
							</View>
						</TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('timezone')}>
							<View style={{ flexDirection: 'row',position:"relative" ,backgroundColor: '#2F2F2F', marginBottom: 20, padding: 15, borderRadius: 7 }}>
								<Image resizeMode='stretch' source={passwordChange} style={{ maxHeight: 22, maxWidth: 30,top:"80%",left:15, position:"absolute"}}></Image>
								<Text style={{ color: 'white', marginLeft: 40 }}>Change password</Text>
							</View>
						</TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('timezone')}>
							<View style={{ flexDirection: 'row', backgroundColor: '#2F2F2F', marginBottom: 20, padding: 15, borderRadius: 7 }}>
								<Image source={timezone} style={{ maxHeight: 22, maxWidth: 20 }}></Image>
								<Text style={{ color: 'white', marginLeft: 20 }}>Device activity</Text>
							</View>
						</TouchableOpacity>

                        <TouchableOpacity style={{marginTop:10}} onPress={() => navigation.navigate('timezone')}>
							<View style={{ flexDirection: 'row', backgroundColor: '#2F2F2F', marginBottom: 20, padding: 15, borderRadius: 7 }}>
								<Image source={timezone} style={{ maxHeight: 22, maxWidth: 20 }}></Image>
								<Text style={{ color: 'white', marginLeft: 20 }}>Delete account</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
