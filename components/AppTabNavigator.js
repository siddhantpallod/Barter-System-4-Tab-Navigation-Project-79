import React from 'react';
import {View,Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeSreen';
import ExchangeScreen from '../screens/ExchangeScreen';

export const AppTabNavigator = createBottomTabNavigator({
    Home : {screen : HomeScreen},
    Exchange : {screen : ExchangeScreen}
})

