import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Timeline() {
	return (
		<View style={inlinestyles.view}>
			<View style={{ padding: 20 }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						backgroundColor: '#2F2F2F',
						padding: 20,
						borderRadius: 4,
					}}
				>
					<Text style={{ color: 'white', fontSize: 15 }}> Shtepi</Text>
					<Text style={inlinestyles.text}>
						Statusi: <Text style={{ color: 'orange' }}>E krijuar</Text>
					</Text>
				</View>

				<View style={{ backgroundColor: '#2F2F2F', padding: 20, borderRadius: 4 }}>
					<View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
							<View style={{ flexDirection: 'column' }}>
								<Text style={inlinestyles.text}>Monedha</Text>
								<Text style={inlinestyles.text}>LEK</Text>
							</View>
							<View>
								<Text style={inlinestyles.text}>Data e Aplikimit</Text>
								<Text style={inlinestyles.text}>24/11/2022</Text>
							</View>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
							<View>
								<Text style={inlinestyles.text}>Shuma e kredise</Text>
								<Text style={inlinestyles.text}>100000 LEK</Text>
							</View>
							<View style={{ position: 'relative', right: 27 }}>
								<Text style={inlinestyles.text}>Kohezgjatja</Text>
								<Text style={inlinestyles.text}>Vite (muaj)</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style={{ padding: 20 }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						backgroundColor: '#2F2F2F',
						padding: 20,
						borderRadius: 4,
					}}
				>
					<Text style={{ color: 'white', fontSize: 15 }}> Shtepi</Text>
					<Text style={inlinestyles.text}>
						Statusi: <Text style={{ color: 'orange' }}>E krijuar</Text>
					</Text>
				</View>

				<View style={{ backgroundColor: '#2F2F2F', padding: 20, borderRadius: 4 }}>
					<View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
							<View style={{ flexDirection: 'column' }}>
								<Text style={inlinestyles.text}>Monedha</Text>
								<Text style={inlinestyles.text}>LEK</Text>
							</View>
							<View>
								<Text style={inlinestyles.text}>Data e Aplikimit</Text>
								<Text style={inlinestyles.text}>24/11/2022</Text>
							</View>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
							<View>
								<Text style={inlinestyles.text}>Shuma e kredise</Text>
								<Text style={inlinestyles.text}>100000 LEK</Text>
							</View>
							<View style={{ position: 'relative', right: 27 }}>
								<Text style={inlinestyles.text}>Kohezgjatja</Text>
								<Text style={inlinestyles.text}>Vite (muaj)</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}

const inlinestyles = StyleSheet.create({
	view: {
		backgroundColor: '#232426',
		height: '100%',
	},
	text: { color: 'white' },
});
