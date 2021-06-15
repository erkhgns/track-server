import React from 'react'

import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import AccountScreen from './src/screens/AccountScreen'
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import SplashScreen from './src/screens/SplashScreen'
import {Provider as AuthProvider} from './src/context/AuthContext'
import {Provider as LocationProvider} from './src/context/LocationContext'
import {setNavigator} from './src/navigationRef'
import {Provider as TrackProvider} from './src/context/TrackContext'
import {FontAwesome} from '@expo/vector-icons'

const trackListFlow = createStackNavigator({
  TrackList:TrackListScreen,
  TrackDetail:TrackDetailScreen
})
trackListFlow.navigationOptions ={
  title: 'Track List',
  tabBarIcon:<FontAwesome name = "th-list" size = {20}/>

}

const switchNavigator = createSwitchNavigator({
  Splash:SplashScreen,
  loginFlow: createStackNavigator({
    SignUp:SignUpScreen,
    SignIn:SignInScreen
  }),
  mainFlow:createBottomTabNavigator({
    TrackListFlow:trackListFlow,
    TrackCreate:TrackCreateScreen,
    Account:AccountScreen

  })
})
const App =  createAppContainer(switchNavigator)
export default () =>{
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref = {(navigator) => {setNavigator(navigator)}}/>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
    
  )
  
}