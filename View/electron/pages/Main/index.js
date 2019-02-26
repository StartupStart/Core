import React from 'react';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import ViewComponent, {mapStateToProps} from 'src/View/electron/ViewComponent';
import {
    BrowserRouter as Router,
    Route,
	Link
} from 'react-router-dom';
import DBModel from "src/Models/DBModel";

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
				<span>{translate("mainScreen.header")}</span>
				<Link to="/settings">
					<div>
						{translate("settingsScreen.header")}
					</div>
				</Link>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Page);
