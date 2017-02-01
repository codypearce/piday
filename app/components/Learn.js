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

export default class Learn extends React.Component {
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
                        fontSize: 24
                    }}
                >
                    Learn
                </Text>
                <TouchableHighlight  onPress={ () => this._navigate('Home') }>
                    <Text>
                        Home
                    </Text>
                </TouchableHighlight>

            </View>
        )
    }
}
