/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Game from './app/components/Game'

export default class piday extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{title: "Game", index: 0}}
            renderScene={(route, navigator) => {
                return <Game title={route.title} />
            }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
}
});

AppRegistry.registerComponent('piday', () => piday);
