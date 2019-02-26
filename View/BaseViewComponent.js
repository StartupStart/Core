import { Component } from 'react';
import { setData } from 'src/actions';
import { fallbackValue } from 'src/Tools';
import translate from "src/translate";

class BaseViewComponent extends Component {
	constructor(props){
		super(props);

		this.state = {};
	}
	translate(subject){
		var language = this.getGlobal("language");
		return translate(subject, language);
	}
	setGlobal(fieldName, val){
		this.props.dispatch(setData(fieldName,val));
	}
	getGlobal(fieldName){
		return fallbackValue(null, this, "props", "data", fieldName);
	}

	setLocalStorage(fieldName, data){
		throw new Error("setLocalStorage needs to be overriden by a sub-class");
	}
	getLocalStorage(fieldName, onRetrieve){
		throw new Error("getLocalStorage needs to be overriden by a sub-class");
	}
}
export const mapStateToProps = (state, ownProps) => {
	return {
		data:state.data
	}
}
export default BaseViewComponent;
