import { fallbackValue } from "src/Tools";
import mainScreen from "src/translate/mainScreen.json";
import settingsScreen from "src/translate/settingsScreen.json";

export default function(subject, language){
	var pointer = null;
	if(typeof subject === "string"){
		pointer = translations;
		var path = subject.split(".");
		for(var ind=0; ind < path.length; ind++){
			pointer = fallbackValue(null, pointer, path[ind]);
		}
	} else {
		pointer = subject;
	}

	if(fallbackValue(null, pointer, language) !== null){
		return fallbackValue(null, pointer, language);
	} else if(fallbackValue(null, pointer, "Chinese_Traditional") !== null && language === "Chinese_Simplified"){
		return fallbackValue(null, pointer, "Chinese_Traditional");
	} else if(fallbackValue(null, pointer, "Chinese_Simplified") !== null && language === "Chinese_Traditional"){
		return fallbackValue(null, pointer, "Chinese_Simplified");
	} else if(fallbackValue(null, pointer, "default") !== null){
		return fallbackValue(null, pointer, "default");
	} else if(fallbackValue(null, pointer, "English") !== null){
		return fallbackValue(null, pointer, "English");
	}

	return null;
}

var translations = {
	mainScreen,
	settingsScreen
};
