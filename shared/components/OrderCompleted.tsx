import { Image, Text, View } from 'react-native';
import styles from '../../styles/styles';

const confirm = require('../../assets/order.png');

export default function OrderCompleted() {
	return (
		<View style={styles.container}>
			<View style={styles.image}>
				<View style={{ alignSelf: 'center', marginTop: '80%', flex: 1 }}>
					<Image source={confirm} style={{ height: 80, width: 80, alignSelf: 'center' }}></Image>
					<Text style={{ color: 'white', fontSize: 20, marginTop: 20 }}>Order successfully placed</Text>
				</View>
			</View>
		</View>
	);
}
