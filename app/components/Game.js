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
        this.enterDigit = this.enterDigit.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.state = {
            display: '',
            digits: 0,
            pi: Math.PI.toString(),
            gameOver: false
        }
    }
    onButtonPress() {
      Alert.alert('Button has been pressed!');
    };
    _navigate(){
      this.props.navigator.push({
        name: 'Home', // Matches route.name
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
   resetGame() {
       this.setState({
           display: '',
           digits: 0,
           gameOver: false
       })
   }
    render() {
        let content = null;
        if(this.state.gameOver) {
            content = <GameOver resetGame={this.resetGame} correctDigits={this.state.digits} />
        } else {
            content = <KeyPad enterDigit={this.enterDigit} />
        }
        var display = this.state.display;
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
                        {this.state.digits} Digits
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
                        Pi:{display}
                    </Text>
                </View>
                <View>
                    <Text>
                        {content}
                    </Text>
                </View>
                <TouchableHighlight onPress={ () => this._navigate() }>
                    <Text>Home</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
