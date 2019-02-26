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
import LanguageSettingView from "src/View/electron/pages/Settings/LanguageSettingView";

import AppManager, {
	setGlobal,
	getGlobal,
	setLocalStorage,
	getLocalStorage,
	translate
} from 'src/AppManager';

class Page extends ViewComponent {
	render(){
		return (
			<div>
				<span>{translate("settingsScreen.header")}</span>
				<Link to="/">
					<div>
						{translate("mainScreen.header")}
					</div>
				</Link>
				<LanguageSettingView />
			</div>
		);
	}
}

export default connect(mapStateToProps)(Page);
