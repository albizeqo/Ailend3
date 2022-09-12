import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { colors } from '../../styles/colors';

const market = require('../../assets/menu/market.png');
const account = require('../../assets/menu/accountstatus-icon.png');
const news = require('../../assets/menu/news.png');
const marketYellow = require('../../assets/menu/marketyellow.png');
const accountYellow = require('../../assets/menu/accountYellow.png');
const newsYellow = require('../../assets/menu/newsyellow.png');
const buyYellow = require('../../assets/menu/buyWithAilendYellow.png');
const buy = require('../../assets/menu/buy.png');
const loan = require('../../assets/menu/loans.png');
const loanyellow = require('../../assets/menu/myLoansYellow.png');

export default function Menu({ state, descriptors, navigation }: any) {
	return (
		<View style={styles.view}>
			{state.routes.map((route: any, index: number) => {
				const { options } = descriptors[route.key];
				const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
				const isFocused = state.index === index;
				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						// The `merge: true` option makes sure that the params inside the tab screen are preserved
						navigation.navigate({ name: route.name, merge: true });
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					});
				};

				return (
					<TouchableOpacity
						key={index}
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={{
							flex: 1,
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Image
							source={
								label === 'Market' && !isFocused
									? market
									: label === 'MyLoans' && !isFocused
									? loan
									: label === 'Blog' && !isFocused
									? news
									: label === 'Account' && !isFocused
									? account
									: label === 'BuyWithAilend' && !isFocused
									? buy
									: label === 'Market' && isFocused
									? marketYellow
									: label === 'MyLoans' && isFocused
									? loanyellow
									: label === 'Blog' && isFocused
									? newsYellow
									: label === 'BuyWithAilend' && isFocused
									? buyYellow
									: label === 'Account' && isFocused
									? accountYellow
									: accountYellow
							}
							style={{
								width: 25,
								height: 25,
								resizeMode: 'contain',
							}}
						/>
						<Text
							style={{
								fontSize: 11,
								color: isFocused ? colors.gold : colors.lightGray,
							}}
						>
							{label}
						</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.grayBackground,
		// height: Platform.OS === 'ios' ? 50 : 50,
		paddingTop: 6,
		paddingBottom: 2,
		// paddingHorizontal: 5,
		// paddingVertical: 5,
	},
});
