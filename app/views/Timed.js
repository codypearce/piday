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

export default class Timed extends React.Component {
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
                flex: 1,
                backgroundColor: '#1976D2',
            }}

            >
                <View  style={{top: 5, left: 5}}>
                    <TouchableHighlight onPress={ () => this._navigate() }>
                        <Text style={{color: 'white'}}>Back</Text>
                    </TouchableHighlight>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 24
                        }}
                        >
                        Timed
                    </Text>
                </View>


            </View>
        )
    }
}
