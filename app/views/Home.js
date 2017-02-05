import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Navigator,
  TouchableHighlight
} from 'react-native';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    onButtonPress() {
      Alert.alert('Button has been pressed!');
    };
    _navigate(route){
      this.props.navigator.push({
        name: route,
      })
    }
    render() {
        return (
            <View style={{
                backgroundColor: '#1976D2',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}

            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 24,
                        marginTop: -100,
                        marginBottom: 100
                    }}
                >
                    Pi day
                </Text>
                <TouchableHighlight  onPress={ () => this._navigate('Game') }>
                    <Text style={{color: 'white', fontSize: 18, marginBottom: 5}}>
                        Play
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight  onPress={ () => this._navigate('Timed') }>
                    <Text style={{color: 'white', fontSize: 18, marginBottom: 5}}>
                        Timed
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight  onPress={ () => this._navigate('Quiz') }>
                    <Text style={{color: 'white', fontSize: 18, marginBottom: 5}}>
                        Quiz
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight  onPress={ () => this._navigate('Learn') }>
                    <Text style={{color: 'white', fontSize: 18, marginBottom: 5}}>
                        Learn
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight  onPress={ () => this._navigate('About') }>
                    <Text style={{color: 'white', fontSize: 18, marginBottom: 5}}>
                        About
                    </Text>
                </TouchableHighlight>

            </View>
        )
    }
}
