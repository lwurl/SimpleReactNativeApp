/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
import {
    createStackNavigator,
} from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
        },
    }
);

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}