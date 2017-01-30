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

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    onButtonPress() {
      Alert.alert('Button has been pressed!');
    };
    _navigate(){
      this.props.navigator.push({
        name: 'Home', // Matches route.name
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
                    <Text>Home</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
