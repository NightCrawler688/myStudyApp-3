import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const switchNavigator = createSwitchNavigator({
  Welcome:{screen:WelcomeScreen},
  Home:{screen:HomeScreen}
})

const AppContainer = createAppContainer(switchNavigator);