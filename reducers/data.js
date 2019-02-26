var initialState = {
};

const data = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_DATA':
			var fieldName = action.data.fieldName;
			var newData = action.data.newVal;
			var newState = setObjectVal(Object.assign({}, state, {}), fieldName, newData);
			return newState;
		default:
			return state || initialState;
	}
}
function setObjectVal(currentObject,pathData, val){
	if(currentObject === null || typeof currentObject !== "object"){
		currentObject = {};
	}
	var path = pathData.split(".");

	var targetObject = currentObject;
	for(var ind=0; ind < path.length; ind++){
		var fieldName = path[ind];
		if(ind === path.length - 1){
			targetObject[fieldName] = val;
			return currentObject;
		}
		if(targetObject[fieldName] === null || typeof targetObject[fieldName] !== "object"){
			console.log(fieldName + " is not an object")
			targetObject[fieldName] = {};
		}
		targetObject = targetObject[fieldName];
	}
	return currentObject;
}

export default data;
