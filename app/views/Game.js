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
    _navigate(route){
      this.props.navigator.push({
        name: route, // Matches route.name
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
            content = <Keypad enterDigit={this.enterDigit} />
        }
        var display = this.state.display;
        return (
            <View style={styles.wrapper}>
                <View  style={styles.backBtn>
                    <TouchableHighlight onPress={ () => this._navigate('Home') }>
                        <Text style={styles.white}>Back</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.container}>
                    <View
                        style={styles.digits}>
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
                        marginBottom: 50
                    }}>
                        <Text
                        style={{
                            color: 'white',
                            fontSize: 24
                        }}
                        >
                            Pi: {this.state.display}
                        </Text>
                    </View>
                    <View>
                            {content}
                    </View>
                </View>
            </View>
        )
    }
}
class GameOver extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: "white"}}>You got {this.props.correctDigits} digits correct</Text>
                <TouchableHighlight onPress={this.props.resetGame} ><Text style={{color: "white", marginTop: 30, fontSize: 28}}>Try again</Text></TouchableHighlight>
            </View>
        )
    }

}
const styles = StyleSheet.create({
  wrapper: {
      backgroundColor: '#1976D2',
      flex: 1,
  },
  backBtn: {
      top: 5,
      left: 5
  },
  white: {
      color: 'white'
  },
  container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
  },
  digits: {
      marginTop: -100,
      marginBottom: 50
  }
});
