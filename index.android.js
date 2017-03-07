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
  Navigator,
  BackAndroid
} from 'react-native';


import Home from './app/views/Home'
import Memorize from './app/views/Memorize'
import Game from './app/views/Game'
import Timed from './app/views/Timed'
import Quiz from './app/views/Quiz'
import Learn from './app/views/Learn'
import Settings from './app/views/Settings'
import Donate from './app/views/Donate'
import About from './app/views/About'
import Records from './app/views/Records'
import LearnPage from './app/views/LearnPage'


export default class piday extends Component {
    componentWillUnmount(){
        BackAndroid.removeEventListener('hardwareBackPress');
    }
    renderScene(route, navigator) {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                   navigator.pop();
                   return true;
               }
               return false;
        });
        if(route.name == 'Home') {
            return <Home navigator={navigator} />
        }
        if(route.name == 'Memorize') {
            return <Memorize navigator={navigator} />
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

        // Learn Page Sections
        if(route.name == 'Whatispi') {
            return <LearnPage navigator={navigator} title={'What is Pi?'} />
        }
        if(route.name == 'Whatispiday') {
            return <LearnPage navigator={navigator} title={'What is Pi day?'} />
        }
        if(route.name == 'Propertiesofpi') {
            return <LearnPage navigator={navigator} title={'The Properties of Pi'} />
        }
        if(route.name == 'Historyofpi') {
            return <LearnPage navigator={navigator} title={'The History of Pi'}  />
        }
        if(route.name == 'Computingdigits') {
            return <LearnPage navigator={navigator} title={'Computing Digits of Pi'} />
        }
        if(route.name == 'Pimathsci') {
            return <LearnPage navigator={navigator} title={'Pi in Math & Science'} />
        }
        if(route.name == 'Pipop') {
            return <LearnPage navigator={navigator} title={'Pi in Popular Culture'}  />
        }
        if(route.name == 'Glossary') {
            return <LearnPage navigator={navigator} title={'Glossary'} />
        }

        if(route.name == 'Settings') {
            return <Settings navigator={navigator} />
        }
        if(route.name == 'Records') {
            return <Records navigator={navigator} />
        }
        if(route.name == 'Donate') {
            return <Donate navigator={navigator} />
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

AppRegistry.registerComponent('piday', () => piday);
