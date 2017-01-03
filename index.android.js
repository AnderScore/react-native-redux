
import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import App from './App'

export default class reactNativeRedux extends Component {
  render() {
    return (
      <View>
        <App />
      </View>
    )
  }
}

AppRegistry.registerComponent('reactNativeRedux', () => reactNativeRedux);
