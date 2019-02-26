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
import { fallbackValue } from 'src/Tools';
import {
	setGlobal,
	getGlobal,
	setLocalStorage,
	getLocalStorage,
	translate
} from 'src/AppManager';

class Widget extends ViewComponent {
	render() {
		var scale = getGlobal("scale");
		var language = fallbackValue("English", getGlobal("language"));
		return (
			<View style={{
				backgroundColor: '#efefef',
				paddingTop: fallbackValue(0, getGlobal("recommendedHeaderPaddingTop")),
				paddingBottom: 5,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between'
			}}>
				<View></View>
				<Text style={{fontSize:scale * 15}}>{translate("settingsScreen.header")}</Text>
				<View></View>
			</View>
		);
	}
}
export default connect(mapStateToProps)(Widget);
