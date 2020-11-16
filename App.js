import React from 'react'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Ionicons} from '@expo/vector-icons'

import HomeScreen from './screens/HomeScreen'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import MessageScreen from './screens/MessageScreen'
import NotificationScreen from './screens/NotificationScreen'
import ProfileScreen from './screens/ProfileScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBP4BbOhVyrd-3H53C8E12dxRPHNaW_LeA",
    authDomain: "ronu-81a70.firebaseapp.com",
    databaseURL: "https://ronu-81a70.firebaseio.com",
    projectId: "ronu-81a70",
    storageBucket: "ronu-81a70.appspot.com",
    messagingSenderId: "373083665239",
    appId: "1:373083665239:web:0389ec88c08ab8522ac412",
    measurementId: "G-R1Z6F631D4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  //const AppStack = createStackNavigator({
    // Home: HomeScreen
  //})

//App: AppStack,

  const AppTabNavigator = createBottomTabNavigator(
      {
        Home:{
            screen: HomeScreen,
            navigationOptions:{
                tabBarIcon:({tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor}></Ionicons>
            }
        },
        Message:{
            screen: MessageScreen,
            navigationOptions:{
                tabBarIcon:({tintColor}) => <Ionicons name="ios-chatboxes" size={24} color={tintColor}></Ionicons>
            }
        },
        Notification:{
            screen: NotificationScreen,
            navigationOptions:{
                tabBarIcon:({tintColor}) => <Ionicons name="ios-notifications" size={32} color={tintColor}></Ionicons>
            }
        },  
        Profile:{
            screen: ProfileScreen,
            navigationOptions:{
                tabBarIcon:({tintColor}) => <Ionicons name="ios-person" size={32} color={tintColor}></Ionicons>
            }
        }   
      },
      {
          tabBarOptions:{
              activeTintColor:"#161F3D",
              inactiveTintColor:"#B8BBC4"
              //showLabel:false
          }
      }

  )


  const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen  
    
    
})

export default createAppContainer(
    createSwitchNavigator({
    Loading: LoadingScreen,    
    App: AppTabNavigator,
    Auth: AuthStack
   
    },
    {
        initialRouteName: "Loading"

    }


    )
);
