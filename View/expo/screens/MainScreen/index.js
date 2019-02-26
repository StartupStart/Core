import React from 'react';
import {
	ScrollView,
	StyleSheet,
	Image,
    Platform,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import ViewComponent, { mapStateToProps } from 'src/View/expo/ViewComponent';
import { connect } from 'react-redux';
import { Icon, AdMobBanner } from 'expo';
import Header from './Header';
import { fallbackValue } from 'src/Tools';
import { StackActions } from 'react-navigation';
import {
	setGlobal,
	getGlobal,
	setLocalStorage,
	getLocalStorage,
	translate
} from 'src/AppManager';

class MainScreen extends ViewComponent {
	constructor(){
		super();
	}

	render() {
		var scale = getGlobal("scale");

		var screen = getGlobal("screen");
		var screenWidth = fallbackValue(null, screen, "width");
		var screenHeight = fallbackValue(null, screen, "height");

		return (
			<View>
				<Header />
				<Text>{translate("mainScreen.body")}</Text>
			</View>
		);
	}
}
export default connect(mapStateToProps)(MainScreen);
