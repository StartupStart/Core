export default class AppManager {
	static getRootView(){
		return AppManager.rootView;
	}
}
export function setGlobal(fieldName, val){
	var rootView = getRootView();
	rootView.setGlobal(fieldName,val);
}
export function getGlobal(fieldName){
	var rootView = getRootView();
	return rootView.getGlobal(fieldName)
}

export function setLocalStorage(fieldName, data){
	var rootView = getRootView();
	return rootView.setLocalStorage(fieldName, data);
}

export function getLocalStorage(fieldName, onRetrieve){
	var rootView = getRootView();
	return rootView.getLocalStorage(fieldName, onRetrieve)
}

export function translate(subject){
	var rootView = getRootView();
	return rootView.translate(subject)
}

function getRootView(){
	var rootView = AppManager.getRootView();
	if(rootView === null){
		throw new Error("rootView is not defined");
	}

	return rootView;
}
