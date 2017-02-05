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

import Home from './app/views/Home'
import Game from './app/views/Game'
import Timed from './app/views/Timed'
import Quiz from './app/views/Quiz'
import Learn from './app/views/Learn'
import About from './app/views/About'

export default class piday extends Component {
    renderScene(route, navigator) {
        if(route.name == 'Home') {
            return <Home navigator={navigator} />
        }
        if(route.name == 'Game') {
            return <Game navigator={navigator} />
        }
        if(route.name == 'Timed') {
            return <Timed navigator={navigator} />
        }
        if(route.name == 'Quiz') {
            return <Quiz navigator={navigator} />
        }
        if(route.name == 'Learn') {
            return <Learn navigator={navigator} />
        }
        if(route.name == 'About') {
            return <About navigator={navigator} />
        }
    }
    render() {
        return (
            <Navigator
                initialRoute={{title: "Home", name: 'Home', component: Home}}
                renderScene={this.renderScene}
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
