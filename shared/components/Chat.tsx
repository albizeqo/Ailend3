import React from 'react';
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../../styles/styles';

const arrow1 = require('../../assets/arrow.png');
const document = require('../../assets/document.png');

export default function Chat({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.image}>
				<View style={styles.containerView1}>
					<TouchableOpacity onPress={() => navigation.goBack()}>
						<Image style={styles.arrow} source={arrow1} />
					</TouchableOpacity>
					<Text
						style={{
							color: 'white',
							marginTop: 33,
							marginRight: 100,
							fontWeight: '500',
							fontSize: 18,
						}}
					>
						Chat
					</Text>
				</View>

				<View style={{ flex: 1, marginTop: 20, padding: 20 }}>
					<ScrollView>
						<View style={{ marginBottom: 20, marginTop: 20 }}>
							<Text style={{ color: 'white', textAlign: 'center' }}>Today</Text>
						</View>

						<View>
							<View style={{ marginBottom: 30, flexDirection: 'row', marginRight: 120 }}>
								<Text style={{ color: 'white', backgroundColor: '#A48D14', padding: 10, borderRadius: 8 }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo habitasse morbi et eu.
								</Text>
								<Text style={{ color: 'white' }}> 14:30</Text>
							</View>

							<View style={{ justifyContent: 'flex-end', marginLeft: 120, flexDirection: 'row' }}>
								<Text style={{ color: 'white' }}>14:31 </Text>
								<Text style={{ color: 'white', backgroundColor: '#2F2F2F', padding: 10, borderRadius: 8 }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo habitasse morbi et eu.
								</Text>
							</View>
						</View>
						<View style={{ marginBottom: 20, marginTop: 20 }}>
							<Text style={{ color: 'white', textAlign: 'center' }}>Today</Text>
						</View>

						<View>
							<View style={{ marginBottom: 30, flexDirection: 'row', marginRight: 120 }}>
								<Text style={{ color: 'white', backgroundColor: '#A48D14', padding: 10, borderRadius: 8 }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo habitasse morbi et eu.
								</Text>
								<Text style={{ color: 'white' }}> 14:30</Text>
							</View>

							<View style={{ justifyContent: 'flex-end', marginLeft: 120, flexDirection: 'row' }}>
								<Text style={{ color: 'white' }}>14:31 </Text>
								<Text style={{ color: 'white', backgroundColor: '#2F2F2F', padding: 10, borderRadius: 8 }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo habitasse morbi et eu.
								</Text>
							</View>
						</View>
					</ScrollView>
				</View>
				<View>
					<View style={{ padding: 20, flexDirection: 'row', marginBottom: 20 }}>
						<View style={{ backgroundColor: '#A48D14', borderRadius: 50, width: 40, padding: 10 }}>
							<Image source={document} style={{ height: 20, width: 20 }}></Image>
						</View>
						<TextInput
							style={{
								opacity: 1,
								color: '#FFFFFF',
								backgroundColor: '#2C2C2C',
								height: 40,
								borderWidth: 1,
								borderColor: '#2C2C2C',
								padding: 10,
								borderRadius: 27,
								marginLeft: 20,
								flex: 1,
							}}
							placeholder="Write a message"
							placeholderTextColor={'white'}
						></TextInput>
					</View>
				</View>
			</View>
		</View>
	);
}
