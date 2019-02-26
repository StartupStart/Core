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
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import LanguageSettingPresenter from 'src/Presenter/LanguageSettingPresenter';
import {
	setGlobal,
	getGlobal,
	setLocalStorage,
	getLocalStorage,
	translate
} from 'src/AppManager';

class LanguageSettingView extends ViewComponent {
	constructor(){
		super();
		var languageSettingPresenter = new LanguageSettingPresenter({
			"view": this
		});
	}

	render() {
		var presenter = fallbackValue(null, this, "state", "presenter");
		var scale = getGlobal("scale");

		var screen = getGlobal("screen");
		var screenWidth = fallbackValue(null, screen, "width");
		var screenHeight = fallbackValue(null, screen, "height");

		return (
			<RadioForm
				ref={"languageRadio"}
				radio_props={presenter.getAllowedLanguages()}
				onPress={(newLanguageCode)=>{presenter.setLanguage(newLanguageCode)}}
				animation={false}
			/>
		);
	}
	componentDidMount(){
		var presenter = fallbackValue(null, this, "state", "presenter");
		getLocalStorage("language", (lang)=>{
			var storedLanguage = fallbackValue("English", lang);
			if(typeof storedLanguage !== "string"){
				storedLanguage = "English";
			}
			var matchedInd = null;
			var languageRadioData = presenter.getAllowedLanguages();
			for(var ind=0; ind < languageRadioData.length; ind++){
				if(languageRadioData[ind].value === storedLanguage){
					matchedInd = ind;
					break;
				}
			}
			if(matchedInd !== null){
				this.refs.languageRadio.updateIsActiveIndex(matchedInd);
			}
		});
	}
}
export default connect(mapStateToProps)(LanguageSettingView);
