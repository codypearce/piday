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
    _navigate(){
      this.props.navigator.push({
        name: 'Game',
      })
    }
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}

            >
                <Text>
                    {this.props.title}
                </Text>
                <TouchableHighlight onPress={ () => this._navigate() }>
                    <Text>Play</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
