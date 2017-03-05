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
import Memorize from './app/views/Memorize'
import Game from './app/views/Game'
import Timed from './app/views/Timed'
import Quiz from './app/views/Quiz'
import Learn from './app/views/Learn'
import Settings from './app/views/Settings'
import Records from './app/views/Records'
import LearnPage from './app/views/LearnPage'


//content
import Whatispi from './app/content/whatispi';
import whatispiday from './app/content/whatispiday';
import propertiesofpi from './app/content/propertiesofpi';
import historyofpi from './app/content/historyofpi';
import computingdigits from './app/content/computingdigits';
import pimathsci from './app/content/pimathsci';
import pipop from './app/content/pipop';
import glossary from './app/content/glossary';



export default class piday extends Component {
    renderScene(route, navigator) {
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
        if(route.name == 'whatispi') {
            return <LearnPage navigator={navigator} title={Whatispi.title} content={Whatispi.content} />
        }
        if(route.name == 'whatispiday') {
            return <LearnPage navigator={navigator} title={whatispiday.title} content={whatispiday.content} />
        }
        if(route.name == 'propertiesofpi') {
            return <LearnPage navigator={navigator} title={propertiesofpi.title} content={propertiesofpi.content} />
        }
        if(route.name == 'historyofpi') {
            return <LearnPage navigator={navigator} title={historyofpi.title} content={historyofpi.content} />
        }
        if(route.name == 'computingdigits') {
            return <LearnPage navigator={navigator} title={computingdigits.title} content={computingdigits.content} />
        }
        if(route.name == 'pimathsci') {
            return <LearnPage navigator={navigator} title={pimathsci.title} content={pimathsci.content} />
        }
        if(route.name == 'pipop') {
            return <LearnPage navigator={navigator} title={pipop.title} content={pipop.content} />
        }
        if(route.name == 'glossary') {
            return <LearnPage navigator={navigator} title={glossary.title} content={glossary.content} />
        }

        if(route.name == 'Settings') {
            return <Settings navigator={navigator} />
        }
        if(route.name == 'Records') {
            return <Records navigator={navigator} />
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
