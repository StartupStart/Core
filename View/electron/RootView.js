import React from 'react';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';
import ViewComponent, {mapStateToProps} from 'src/View/electron/ViewComponent';
import Main from 'src/View/electron/pages/Main';
import Settings from 'src/View/electron/pages/Settings';
import {
	HashRouter as Router,
	Route
} from 'react-router-dom';
import {mkVector, fallbackValue} from "src/Tools";

import AppManager, {
	setGlobal,
	getGlobal,
	setLocalStorage,
	getLocalStorage
} from 'src/AppManager';

class RootView extends ViewComponent {
	constructor(){
		super();
		AppManager.rootView = this;
	}

	componentDidMount(){
		window.onresize = (event)=>{
			var resetRootFontSize = window["resetRootFontSize"];
			if(fallbackValue(null, resetRootFontSize) !== null){
				resetRootFontSize();
			}

			var viewportWidth = window.innerWidth;
			var viewportHeight = window.innerHeight;

			setGlobal("screen",{
				"width":viewportWidth,
				"height":viewportHeight,
			});
		}

		var viewportWidth = window.innerWidth;
		var viewportHeight = window.innerHeight;
		setGlobal("screen",{
			"width":viewportWidth,
			"height":viewportHeight,
		});

		getLocalStorage("language", (lang)=>{
			var storedLanguage = fallbackValue("English", lang);
			if(typeof storedLanguage !== "string"){
				storedLanguage = "English";
			}
			setGlobal("language", storedLanguage);
		});
	}
	render(){
		return (
			<Router>
				<div style={{
					display:"flex",
					flexDirection:"column",
					flexGrow:1
				}}>
					<Route exact path="/" component={Main}></Route>
					<Route exact path="/settings" component={Settings}></Route>
				</div>
			</Router>
		);
	}
}

export default connect(mapStateToProps)(RootView);
