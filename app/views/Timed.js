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

import Keypad from '../components/Keypad';

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
    enterDigit(value) {
       if(this.state.pi[this.state.digits] == value) {
           this.setState({
               display: this.state.display + value.toString(),
               digits: this.state.digits + 1
           });
       } else {
           this.setState({
               gameOver: true
           });
       }
   }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#1976D2',
            }}

            >
                <View  style={{top: 5, left: 5}}>
                    <TouchableHighlight onPress={ () => this._navigate('Home') }>
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
                    <Keypad enterDigit={this.enterDigit} />
                </View>


            </View>
        )
    }
}
