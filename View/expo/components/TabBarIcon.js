import React from 'react';
import { Icon } from 'expo';
import { fallbackValue } from 'src/Tools';
import ViewComponent, { mapStateToProps } from 'src/View/expo/ViewComponent';
import Colors from 'src/View/expo/constants/Colors';
import { connect } from 'react-redux';

class TabBarIcon extends ViewComponent {
	render() {
		var iconSet = fallbackValue("ionicons", this.props, "set").toLowerCase();
		var scale = 1;//this.getData("scale");
		var size = fallbackValue(26, this.props, "size") * scale;

		switch (iconSet) {
			case "ionicons":
				return (
					<Icon.Ionicons
						name={this.props.name}
						size={size}
						style={{ marginBottom: -3 }}
						color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
					/>
				);
				break;
			case "fontawesome":
				return (
					<Icon.FontAwesome
						name={this.props.name}
						size={size}
						style={{ marginBottom: -3 }}
						color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
					/>
				);
				break;
			case "entypo":
				return (
					<Icon.Entypo
						name={this.props.name}
						size={size}
						style={{ marginBottom: -3 }}
						color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
					/>
				);
				break;
			case "materialicons":
				return (
					<Icon.MaterialIcons
						name={this.props.name}
						size={size}
						style={{ marginBottom: -3 }}
						color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
					/>
				);
				break;
			case "materialcommunityicons":
				return (
					<Icon.MaterialCommunityIcons
						name={this.props.name}
						size={size}
						style={{ marginBottom: -3 }}
						color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
					/>
				);
				break;
			case "evilicons":
				return (
					<Icon.EvilIcons
						name={this.props.name}
						size={size}
						style={{ marginBottom: -3 }}
						color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
					/>
				);
				break;
			default:
				return (
					<Icon.Ionicons
						name={this.props.name}
						size={size}
						style={{ marginBottom: -3 }}
						color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
					/>
				);
		}
	}
}
export default connect(mapStateToProps)(TabBarIcon);
