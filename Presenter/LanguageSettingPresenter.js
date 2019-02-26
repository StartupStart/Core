import languages from 'src/languages.json';
import BasePresenter from 'src/Presenter/BasePresenter';
import {
	setGlobal,
	getGlobal,
	setLocalStorage,
	getLocalStorage
} from 'src/AppManager';
import {mkVector, fallbackValue} from "src/Tools";

export default class LanguageSettingPresenter extends BasePresenter {
	constructor(props){
		super(props);
    }

	setLanguage(newLanguageCode){
		if(typeof newLanguageCode === "object"){
			newLanguageCode = newLanguageCode.value;
		}

		setGlobal("language", newLanguageCode);
		setLocalStorage("language", newLanguageCode);
	}

	getSelectedLanguage(){
		return fallbackValue("", getGlobal("language"));
	}

	getAllowedLanguages(){
		var toReturn = [];
		languages.forEach((currentLanguage)=>{
			toReturn.push({
				label:currentLanguage.displayName,
				value:currentLanguage.code
			});
		});
		return toReturn;
	}
}
