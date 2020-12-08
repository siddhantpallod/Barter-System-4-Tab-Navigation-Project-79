import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AppTabNavigator} from './components/AppTabNavigator';

export default class App extends React.Component {
  render(){
  return (
    <View style = {{flex:1}}>
      <AppContainer/>
    </View>
  );
  }
}

const switchNavigator = createSwitchNavigator({
    Login : {screen : LoginScreen},
    BottomTab : {screen : AppTabNavigator}
})

const AppContainer = createAppContainer(switchNavigator)


