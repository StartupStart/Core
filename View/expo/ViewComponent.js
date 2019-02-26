import BaseViewComponent, { mapStateToProps } from 'src/View/BaseViewComponent';
import {
	AsyncStorage,
} from 'react-native';

class ViewComponent_Expo extends BaseViewComponent {
	static navigationOptions = {
		header: null,
	};

	constructor(props){
		super(props);

		this.state = {};
	}

	setLocalStorage(fieldName, data){
		AsyncStorage.setItem(fieldName, JSON.stringify(data));
	}
	getLocalStorage(fieldName, onRetrieve){
		AsyncStorage.getItem(fieldName).then((retrievedData)=>{
			if(typeof retrievedData === "string"){
				onRetrieve(JSON.parse(retrievedData));
			} else {
				onRetrieve(null);
			}
		});
	}
}

export default ViewComponent_Expo;
module.exports.mapStateToProps = mapStateToProps;
