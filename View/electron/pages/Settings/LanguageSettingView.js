import React from 'react';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import ViewComponent, {mapStateToProps} from 'src/View/electron/ViewComponent';
import Icon from 'src/View/electron/Icon';
import {
    BrowserRouter as Router,
    Route,
	Link
} from 'react-router-dom';
import DBModel from "src/Models/DBModel";
import {mkVector, fallbackValue} from "src/Tools";
import LanguageSettingPresenter from 'src/Presenter/LanguageSettingPresenter';
import AppManager, {
	setGlobal,
	getGlobal,
	setLocalStorage,
	getLocalStorage
} from 'src/AppManager';

class LanguageSettingView extends ViewComponent {
	constructor(){
		super();
		var languageSettingPresenter = new LanguageSettingPresenter({
			"view": this
		});
	}

	render(){
		var presenter = fallbackValue(null, this, "state", "presenter");
		return (
			<select
				onChange={(e)=>{
					var newLanguageCode = e.target.value;
					presenter.setLanguage(newLanguageCode);
				}}
				value={presenter.getSelectedLanguage()}
			>
				{presenter.getAllowedLanguages().map((currentLanguage, ind)=>{
					return (
						<option
							key={ind}
							value={currentLanguage.value}
						>
							{currentLanguage.label}
						</option>
					);
				})}
			</select>
		);
	}
}

export default connect(mapStateToProps)(LanguageSettingView);
