import BaseViewComponent, { mapStateToProps } from 'src/View/BaseViewComponent';

class Component_Electron extends BaseViewComponent {
	constructor(props){
		super(props);

		this.state = {};
	}

	setLocalStorage(fieldName, data){
		localStorage.setItem(fieldName, JSON.stringify(data));
	}
	getLocalStorage(fieldName, onRetrieve){
		var retrievedData = localStorage.getItem(fieldName);

		if(typeof retrievedData === "string"){
			onRetrieve(JSON.parse(retrievedData));
		} else {
			onRetrieve(null);
		}
	}
}

export default Component_Electron;
module.exports.mapStateToProps = mapStateToProps;
