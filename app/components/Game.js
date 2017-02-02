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
                backgroundColor: '#1976D2',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}

            >
                <View
                    style={{

                        marginTop: -100,
                        marginBottom: 100
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 24
                        }}>
                        0 Digits
                    </Text>
                </View>
                <View
                style={{
                    marginBottom: 100
                }}>
                    <Text
                    style={{
                        color: 'white',
                        fontSize: 24
                    }}
                    >
                        Pi:
                    </Text>
                </View>
                <View>
                    <Text>
                        Keypad
                    </Text>
                </View>
                <TouchableHighlight onPress={ () => this._navigate() }>
                    <Text>Home</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
