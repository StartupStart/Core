import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import {mkVector, fallbackValue} from "/src/Tools";
import ViewComponent from '/src/View/electron/ViewComponent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	fab
} from '@fortawesome/free-brands-svg-icons'
import {
	faCheckSquare,
	faCoffee,
	faPlusCircle,
} from '@fortawesome/free-solid-svg-icons'
library.add(
	fab,
	faCheckSquare,
	faCoffee,			// coffee
	faPlusCircle		// plus-circle
);

class Widget extends ViewComponent {
	render(){
		var iconName = fallbackValue(null, this, "props", "name");
		var iconSet = fallbackValue("FontAwesome", this, "props", "set");

		switch (iconSet) {
			case "FontAwesome":
				return <FontAwesomeIcon icon={iconName} />
				break;
			default:
				return <FontAwesomeIcon icon={iconName} />
				break;
		}
	}
}
export default Widget;
