import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from 'src/View/expo/components/TabBarIcon';
import MainScreen from 'src/View/expo/screens/MainScreen';
import SettingsScreen from 'src/View/expo/screens/SettingsScreen';
import { fallbackValue } from 'src/Tools';


const MainStack = createStackNavigator({
	MainScreen: MainScreen,
});
MainStack.navigationOptions = {
	tabBarLabel: 'MainStack',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			set="EvilIcons"
			focused={focused}
			name="location"
		/>
	),
};

const SettingsStack = createStackNavigator({
	SettingsScreen: SettingsScreen,
});
SettingsStack.navigationOptions = {
	tabBarLabel: 'SettingsStack',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			set="FontAwesome"
			focused={focused}
			name="cog"
		/>
	),
};

export default createBottomTabNavigator({
	MainStack,
	SettingsStack,
}, {
	tabBarOptions: {
		showLabel: false
	}
});
