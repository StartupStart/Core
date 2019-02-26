import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon, ScreenOrientation } from 'expo';
import AppNavigator from 'src/View/expo/navigation/AppNavigator';
import ViewComponent, { mapStateToProps } from 'src/View/expo/ViewComponent';
import AppManager from 'src/AppManager';

import { connect } from 'react-redux';
import reducers from 'src/reducers';
import moment from 'moment';
import { Dimensions } from 'react-native'
import { fallbackValue } from 'src/Tools';

import {
	setGlobal,
	getGlobal,
	setLocalStorage,
	getLocalStorage
} from 'src/AppManager';

ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);

class RootView extends ViewComponent {
	state = {
		isLoadingComplete: false,
	};

	constructor(){
		super();
		AppManager.rootView = this;
	}

	componentDidMount(){
		var viewportWidth = Dimensions.get('window').width;
		var viewportHeight = Dimensions.get('window').height;
		var viewPortMin = Math.min(viewportWidth, viewportHeight);
		var additionalSize = Math.max(viewPortMin - 320, 0);
		var scale = 1 + Math.atan(additionalSize / 1000);
		scale = Math.round(scale * 100) / 100; // round to 2 decimal places
		scale = fallbackValue(1, scale);
		setGlobal("scale", scale);
		setGlobal("language", "English");

		getLocalStorage("language", (lang)=>{
			var storedLanguage = fallbackValue("English", lang);
			setGlobal("language", storedLanguage);
		});

		setGlobal("screen", {
			"height":Dimensions.get('window').height,
			"width":Dimensions.get('window').width
		});
		var recommendedHeaderPaddingTop = 40;
		if(Dimensions.get('window').width > Dimensions.get('window').height){
			recommendedHeaderPaddingTop = 20;
		}
		setGlobal("recommendedHeaderPaddingTop", recommendedHeaderPaddingTop)

		Dimensions.addEventListener("change", (val)=>{
			var height = val.window.height;
			var width = val.window.width;

			var paddingTop = 40;
			if(width > height){
				paddingTop = 20;
			}

			setGlobal("screen", {
				"height":height,
				"width":width,
			});
			setGlobal("recommendedHeaderPaddingTop", paddingTop)
		});
	}

	render() {
		if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
			return (
				<AppLoading
					startAsync={this._loadResourcesAsync}
					onError={this._handleLoadingError}
					onFinish={this._handleFinishLoading}
				/>
			);
		} else {
			return (
				<View style={styles.container}>

					{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
					<AppNavigator />
					{/* <View style={{paddingBottom:15, borderColor:"black", borderWidth:1}}>
						<View style={{backgroundColor:"#55aaff"}}>
							<Text style={{textAlign:"center", height:50}}>Put banner ad here</Text>
						</View>
					</View> */}
				</View>
			);
		}
	}

	_loadResourcesAsync = async () => {
		return Promise.all([
			Asset.loadAsync([
				require('src/View/expo/assets/images/icon.png'),
			]),
			Font.loadAsync({
				// This is the font that we are using for our tab bar
				...Icon.Ionicons.font,
			}),
		]);
	};

	_handleLoadingError = error => {
		// In this case, you might want to report the error to your error
		// reporting service, for example Sentry
		console.warn(error);
	};

	_handleFinishLoading = () => {
		this.setState({ isLoadingComplete: true });
	};
}

export default connect(mapStateToProps)(RootView);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
