import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import BackgroundImage from '../components/BackgroundImage';
import BackBtn from '../components/BackBtn';

//content
import Whatispi from '../content/Whatispi';
import Whatispiday from '../content/Whatispiday';
import Propertiesofpi from '../content/Propertiesofpi';
import Historyofpi from '../content/Historyofpi';
import Computingdigits from '../content/Computingdigits';
import Pimathsci from '../content/Pimathsci';
import Pipop from '../content/Pipop';
import Glossary from '../content/Glossary';

export default class LearnPage extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            test: 'testing'
        }
        this._navigate = this._navigate.bind(this);
    }
    _navigate(route){
      this.props.navigator.push({
        name: route,
      })
    }
    render() {
        var page = null;
        switch(this.props.title) {
            case 'What is Pi?':
                page = <Whatispi navigator={this.props.navigator} />;
                break;
            case 'What is Pi day?':
                page = <Whatispiday navigator={this.props.navigator} />;
                break;
            case 'The Properties of Pi':
                page = <Propertiesofpi navigator={this.props.navigator} />;
                break;
            case 'The History of Pi':
                page = <Historyofpi navigator={this.props.navigator} />;
                break;
            case 'Computing Digits of Pi':
                page = <Computingdigits navigator={this.props.navigator} />;
                break;
            case 'Pi in Math & Science':
                page = <Pimathsci navigator={this.props.navigator} />;
                break;
            case 'Pi in Popular Culture':
                page = <Pipop navigator={this.props.navigator} />;
                break;
            case 'Glossary':
                page = <Glossary navigator={this.props.navigator} />;
                break;
        }
        return (
            <BackgroundImage>
                <BackBtn navigate={() => this._navigate('Learn') } />

                <View style={styles.top}>
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                </View>
                <View style={styles.content}>
                    <ScrollView>
                        {page}
                    </ScrollView>
                </View>
            </BackgroundImage>
        )
    }
}
const styles = StyleSheet.create({
    content: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 350,
        top: 50
    },
    top: {
        bottom: 50,
    },
    title: {
        color:'#810000',
        fontSize: 48,
        fontWeight: "700",
        fontFamily: 'Roboto',
        textAlign: 'center'
    },
    message: {
        color: '#d7933f',
        fontSize: 16,
        marginBottom: 30,
        width: 300,
        lineHeight: 20
    },

    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50
    },


});
