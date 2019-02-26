import languages from 'src/languages.json';
import { fallbackValue } from 'src/Tools';
import { connect } from 'react-redux';

export default class BasePresenter {
	constructor(props){
		var view = fallbackValue(null, props, "view");
        if(fallbackValue(null, view, "state") === null){
            view.state = {}
        }
        var state = Object.assign(view.state, {
			presenter: this
		});
        this.view = view;
    }
}
