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
        this.enterDigit = this.enterDigit.bind(this);
        this.state = {
            display: '',
            digits: 0,
            pi: Math.PI.toString(),
            time: 1000,
            gameOver: false
        }
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
                    <View style={{
                        marginTop: -100,
                        marginBottom: 50
                    }}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 24
                            }}
                            >
                            {this.state.time}
                        </Text>
                    </View >
                    <View style={{marginBottom: 50}} >
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 24
                            }}
                            >
                            PI: {this.state.display}
                        </Text>
                    </View>
                    <Keypad enterDigit={this.enterDigit} />
                </View>


            </View>
        )
    }
}
